---
title: FastAPI
tags:
  - 프로그래밍
  - FastAPI
date: 2023-11-15T00:00:00
---
---

## 기본틀:

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def read_root():
	return {"message": "Hello World"}
```

```bash
uvicorn <dirctory>.<file_name>:<FastAPI_variable> (--reload --host 0.0.0.0 --port 80)
```

ex `uvicorn main:app --reload`

기본 주소는 `127.0.0.1:8000`
API DOCS는 `127.0.0.1:8000/docs`


## Path Parameter:

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/items/{item_id}")
async def read_item(item_id: int):
	return {"item_id": item_id}
```

## Query Parameter:

```python
from fastapi import FastAPI

app = FastAPI()

item_db = [
	{"item_name": "Foo"},
	{"item_name": "Bar"}
]

@app.get("/items/")
async def read_item(skip: int = 0, limit: int = 10):
	return item_db[skip : skip + limit]
```

`http://127.0.0.1:8000/items/?skip=0&limit=10`

매개변수에 들어간 데이터는 기본이 String 하지만 데이터 타입을 명시하면 그 
자료형으로 바뀐다

## Optional Parameter:

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str | None = None):
	if q:
		return {"item_id": item_id, "q": q}
	return {"item_id": item_id}
```

## Request Body:

Request는 무엇이고 Response는 무엇일까
- Request Body: 클라이언트가 API로 데이터를 보낼때 사용되는 데이터
- Response Body: API가 request의 응답으로 클라이언트에게 보내는 데이터

```python
from fastapi import FastAPI
from pydantic import BaseModel


class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    tax: float | None = None


app = FastAPI()


@app.post("/items/")
async def create_item(item: Item):
	item_dict = item.dict()
	if item.tax:
		price_with_tax = item.price + item.tax
		item_dict.update({"price_with_tax": price_with_tax})
    return item_dict
```


### Request + Path + Query:

```python
from fastapi import FastAPI
from pydantic import BaseModel


class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    tax: float | None = None


app = FastAPI()


@app.put("/items/{item_id}")
async def create_item(item_id: int, item: Item, q: str | None = None):
    result = {"item_id": item_id, **item.dict()}
    if q:
        result.update({"q": q})
    return result
```


- 만약 매개변수가 Pydantic Model로 정의되어 있으면 request body로 해석함


## String Validation:

```python
from typing import Annotated

from fastapi import FastAPI, Query

app = FastAPI()


@app.get("/items/")
async def read_items(q: Annotated[str, None, Query(max_length=50)] = None):
	results = {"items" [{"item_id": "Foo", "item_id": "Bar"}]}
	if q: 
		results.update({"q": q})
	return results
```



```python
from typing import Annotated

from fastapi import FastAPI, Query

app = FastAPI()


@app.get("/items/")
async def read_items(
    q: Annotated[
        str | None, Query(min_length=3, max_length=50, pattern="^fixedquery$")
    ] = None,
):
    results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
    if q:
        results.update({"q": q})
    return results
```

## Numeric Validation:


```python
from typing import Annotated

from fastapi import FastAPI, Path, Query

app = FastAPI()


@app.get("/items/{item_id}")
async def read_items(
    item_id: Annotated[int, Path(title="The ID of the item to get")],
    q: Annotated[str | None, Query(alias="item-query")] = None,
):
    results = {"item_id": item_id}
    if q:
        results.update({"q": q})
    return results
```


```python
from typing import Annotated

from fastapi import FastAPI, Path

app = FastAPI()


@app.get("/items/{item_id}")
async def read_items(
    item_id: Annotated[int, Path(title="The ID of the item to get", gt=0, le=1000)],
    q: str,
):
    results = {"item_id": item_id}
    if q:
        results.update({"q": q})
    return results
```

- `gt`: `g`reater `t`han
- `le`: `l`ess than or `e`qual

## Body - Multiple Params

```python
from typing import Annotated

from fastapi import Body, FastAPI
from pydantic import BaseModel

app = FastAPI()


class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    tax: float | None = None


class User(BaseModel):
    username: str
    full_name: str | None = None


@app.put("/items/{item_id}")
async def update_item(
    item_id: int, item: Item, user: User, importance: Annotated[int, Body()]
):
    results = {"item_id": item_id, "item": item, "user": user, "importance": importance}
    return results
```

```json
{
    "item": {
        "name": "Foo",
        "description": "The pretender",
        "price": 42.0,
        "tax": 3.2
    },
    "user": {
        "username": "dave",
        "full_name": "Dave Grohl"
    },
    "importance": 5
}
```

- `Body`클래스를 사용하여 단일 요청 데이터를 제공 가능하다.


> 만약 모델에 하나의 body 매개변수만 있다면 FastAPI는 자동으로 키를 제거 할것이다. 그렇다면 `Body`클래스의 `embed`를 사용하자.


```python
from typing import Annotated

from fastapi import Body, FastAPI
from pydantic import BaseModel

app = FastAPI()


class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    tax: float | None = None


@app.put("/items/{item_id}")
async def update_item(item_id: int, item: Annotated[Item, Body(embed=True)]):
    results = {"item_id": item_id, "item": item}
    return results
```

```json
{
    "item": {
        "name": "Foo",
        "description": "The pretender",
        "price": 42.0,
        "tax": 3.2
    }
}
```


## Body - Fields



```python
from typing import Annotated

from fastapi import Body, FastAPI
from pydantic import BaseModel, Field

app = FastAPI()


class Item(BaseModel):
    name: str
    description: str | None = Field(
        default=None, title="The description of the item", max_length=300
    )
    price: float = Field(gt=0, description="The price must be greater than zero")
    tax: float | None = None


@app.put("/items/{item_id}")
async def update_item(item_id: int, item: Annotated[Item, Body(embed=True)]):
    results = {"item_id": item_id, "item": item}
    return results
```

> `Field`는 Pydantic 모델에 사용되는 `Query`, `Path`, `Body`와 같은 클래스이며 같은 매개변수를 가지고 있다.


## Body - Nested Models

> 속성을 하위 유형으로 정의할 수도 있다.

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    tax: float | None = None
    tags: list[str] = [] # set[str] = set()으로 유니크한 아이템으로 만들 수 있음


@app.put("/items/{item_id}")
async def update_item(item_id: int, item: Item):
    results = {"item_id": item_id, "item": item}
    return results
```


Pydantic 모델의 속성은 각각 타입을 가지고 있다. 그리고 그 타입이 Pydantic 모델이 될 수도 있다.

깊게 네스팅된 JSON 오브젝트를 특정 속성이름, 타입, 제한을 표현할 수 있다.


```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class Image(BaseModel):
    url: str
    name: str


class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    tax: float | None = None
    tags: set[str] = set()
    image: Image | None = None


@app.put("/items/{item_id}")
async def update_item(item_id: int, item: Item):
    results = {"item_id": item_id, "item": item}
    return results
```

```json
{
    "name": "Foo",
    "description": "The pretender",
    "price": 42.0,
    "tax": 3.2,
    "tags": ["rock", "metal", "bar"],
    "image": {
        "url": "http://example.com/baz.jpg",
        "name": "The Foo live"
    }
}
```


> FastAPI로 선언을 하면 에디터 자동완성, 자동 문서화 등 이득이 있다.


파이썬의 기본 자료형 외에도 Pydantic의 클래스를 사용하여 타입을 강제할 수 있다.

```python
from fastapi import FastAPI
from pydantic import BaseModel, HttpUrl

app = FastAPI()


class Image(BaseModel):
    url: HttpUrl # <--
    name: str


class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    tax: float | None = None
    tags: set[str] = set()
    image: Image | None = None


@app.put("/items/{item_id}")
async def update_item(item_id: int, item: Item):
    results = {"item_id": item_id, "item": item}
    return results
```


```json
{
    "name": "Foo",
    "description": "The pretender",
    "price": 42.0,
    "tax": 3.2,
    "tags": [
        "rock",
        "metal",
        "bar"
    ],
    "images": [
        {
            "url": "http://example.com/baz.jpg", // <--
            "name": "The Foo live"
        },
        {
            "url": "http://example.com/dave.jpg", // <--
            "name": "The Baz"
        }
    ]
}
```


함수의 매개변수를 Pydantic 모델로 타입 강제화 할 수도 있다.

```python
from fastapi import FastAPI
from pydantic import BaseModel, HttpUrl

app = FastAPI()


class Image(BaseModel):
	url: HttpUrl
	name: str

@app.get("/images/multiple/")
async def create_multiple_images(images: list[Image]):
	return images
```


## Declare Request Example Data

### JSON 스키마 데이터

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    tax: float | None = None

    model_config = {
        "json_schema_extra": {
            "examples": [
                {
                    "name": "Foo",
                    "description": "A very nice Item",
                    "price": 35.4,
                    "tax": 3.2,
                }
            ]
        }
    }


@app.put("/items/{item_id}")
async def update_item(item_id: int, item: Item):
    results = {"item_id": item_id, "item": item}
    return results
```

### `Field`를 이용


```python
from fastapi import FastAPI
from pydantic import BaseModel, Field

app = FastAPI()


class Item(BaseModel):
    name: str = Field(examples=["Foo"])
    description: str | None = Field(default=None, examples=["A very nice Item"])
    price: float = Field(examples=[35.4])
    tax: float | None = Field(default=None, examples=[3.2])


@app.put("/items/{item_id}")
async def update_item(item_id: int, item: Item):
    results = {"item_id": item_id, "item": item}
    return results
```

> `Body()`, `Path()`, `Query()` 등 안에 `examples`을 넣을 수도 있다.

```python
from typing import Annotated

from fastapi import Body, FastAPI
from pydantic import BaseModel

app = FastAPI()


class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    tax: float | None = None


@app.put("/items/{item_id}")
async def update_item(
    *,
    item_id: int,
    item: Annotated[
        Item,
        Body( # <--
            examples=[
                {
                    "name": "Foo",
                    "description": "A very nice Item",
                    "price": 35.4,
                    "tax": 3.2,
                },
                {
                    "name": "Bar",
                    "price": "35.4",
                },
                {
                    "name": "Baz",
                    "price": "thirty five point four",
                },
            ],
        ),
    ],
):
    results = {"item_id": item_id, "item": item}
    return results
```


## Extra Data Types

> `UUID`, `datetime.datetime`, `datetime.date`, `datetime.time`, `datetime.timedelta`, `frozenset`, `bytes`, `Decimal`와 같은 추가적인 타입을 이용할 수도 있다.


```python
from datetime import datetime, time, timedelta
from typing import Annotated
from uuid import UUID

from fastapi import Body, FastAPI

app = FastAPI()


@app.put("/items/{item_id}")
async def read_items(
    item_id: UUID,
    start_datetime: Annotated[datetime | None, Body()] = None,
    end_datetime: Annotated[datetime | None, Body()] = None,
    repeat_at: Annotated[time | None, Body()] = None,
    process_after: Annotated[timedelta | None, Body()] = None,
):
    start_process = start_datetime + process_after
    duration = end_datetime - start_process
    return {
        "item_id": item_id,
        "start_datetime": start_datetime,
        "end_datetime": end_datetime,
        "repeat_at": repeat_at,
        "process_after": process_after,
        "start_process": start_process,
        "duration": duration,
    }
```

- 함수안에 매개변수들이 데이터 타입을 가지고있고 보통의 날짜 조작이 가능한 것에 집중해라

## Cookie Params

`Query`, `Path`와 같이 쿠키도 같은 방법으로 정의 할수 있다.

```python
from typing import Annotated

from fastapi import Cookie, FastAPI # <--

app = FastAPI()


@app.get("/items/")
async def read_items(ads_id: Annotated[str | None, Cookie()] = None):
    return {"ads_id": ads_id}
```


## Header Params

`Query`, `Path`, `Cookie`와 같은 방법으로 정의 가능

```python
from typing import Union # 3.8 version (?)

from fastapi import FastAPI, Header

app = FastAPI()


@app.get("/items/")
async def read_items(user_agent: Union[str, None] = Header(default=None)):
    return {"User-Agent": user_agent}
```



 헤더는 `-` 문자로 구분을 하는데 파이썬은 `-` 으로 변수 선언을 못한다. 따라서 `_` 을 사용하여 구분해야한다. ex) `HX-Request` => `hx_request`
 
 만약 자동 변환을 비활성화할려면 `Header`클래스의 `convert_underscores`매개변수를 `False`로 설정


```python
from typing import Union

from fastapi import FastAPI, Header

app = FastAPI()


@app.get("/items/")
async def read_items(
    strange_header: Union[str, None] = Header(default=None, convert_underscores=False)
):
    return {"strange_header": strange_header}
```


중복된 헤더를 받을 경우 리스트를 사용하여 해결이 가능하다

```python
from typing import List, Union

from fastapi import FastAPI, Header

app = FastAPI()


@app.get("/items/")
async def read_items(x_token: Union[List[str], None] = Header(default=None)):
    return {"X-Token values": x_token}
```


## Response Model- Return Type

타입 아노테이션을 사용하여 리턴 타입을 정할수 있다

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    tax: float | None = None
    tags: list[str] = []


@app.post("/items/")
async def create_item(item: Item) -> Item:
    return item


@app.get("/items/")
async def read_items() -> list[Item]:
    return [
        Item(name="Portal Gun", price=42.0),
        Item(name="Plumbus", price=32.0),
    ]
```


하지만 리턴값이 정확히 타입이 없을수도 있다. 그럴때 `reponse_model`을 사용한다.

```python
from typing import Any

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    tax: float | None = None
    tags: list[str] = []


@app.post("/items/", response_model=Item) # <--
async def create_item(item: Item) -> Any:
    return item


@app.get("/items/", response_model=list[Item]) # <--
async def read_items() -> Any:
    return [
        {"name": "Portal Gun", "price": 42.0},
        {"name": "Plumbus", "price": 32.0},
    ]
```

- 인풋과 아웃풋을 달리 할 수도 있다.

```python
from typing import Any

from fastapi import FastAPI
from pydantic import BaseModel, EmailStr

app = FastAPI()


class UserIn(BaseModel):
    username: str
    password: str
    email: EmailStr
    full_name: str | None = None


class UserOut(BaseModel):
    username: str
    email: EmailStr
    full_name: str | None = None


@app.post("/user/", response_model=UserOut)
async def create_user(user: UserIn) -> Any:
    return user
```


`reponse_model_include`, `reponse_model_exclude`를 이용한 인코딩

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    tax: float = 10.5
    tags: list[str] = []


items = {
    "foo": {"name": "Foo", "price": 50.2},
    "bar": {"name": "Bar", "description": "The bartenders", "price": 62, "tax": 20.2},
    "baz": {"name": "Baz", "description": None, "price": 50.2, "tax": 10.5, "tags": []},
}


@app.get("/items/{item_id}", response_model=Item, response_model_exclude_unset=True)
async def read_item(item_id: str):
    return items[item_id]
```


```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    tax: float = 10.5


items = {
    "foo": {"name": "Foo", "price": 50.2},
    "bar": {"name": "Bar", "description": "The Bar fighters", "price": 62, "tax": 20.2},
    "baz": {
        "name": "Baz",
        "description": "There goes my baz",
        "price": 50.2,
        "tax": 10.5,
    },
}


@app.get(
    "/items/{item_id}/name",
    response_model=Item,
    response_model_include={"name", "description"},
)
async def read_item_name(item_id: str):
    return items[item_id]


@app.get("/items/{item_id}/public", response_model=Item, response_model_exclude={"tax"})
async def read_item_public_data(item_id: str):
    return items[item_id]
```


- `reponse_model_exclude_defaults=True`, `reponse_model_exclude_none=True` 와 같은 매개변수도 있으니 Pydantic를 참고해라


## Extra Models

유저의 데이터 같은 경우 보안을 신경 써야하기 떄문에 여러 모델을 정의해야 할 수 있다.


상속을 사용한 반복 제거

```python
from fastapi import FastAPI
from pydantic import BaseModel, EmailStr

app = FastAPI()


class UserBase(BaseModel):
    username: str
    email: EmailStr
    full_name: str | None = None


class UserIn(UserBase):
    password: str


class UserOut(UserBase):
    pass


class UserInDB(UserBase):
    hashed_password: str


def fake_password_hasher(raw_password: str):
    return "supersecret" + raw_password


def fake_save_user(user_in: UserIn):
    hashed_password = fake_password_hasher(user_in.password)
    user_in_db = UserInDB(**user_in.dict(), hashed_password=hashed_password)
    print("User saved! ..not really")
    return user_in_db


@app.post("/user/", response_model=UserOut)
async def create_user(user_in: UserIn):
    user_saved = fake_save_user(user_in)
    return user_saved
```


```python
from typing import Union

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class BaseItem(BaseModel):
    description: str
    type: str


class CarItem(BaseItem):
    type: str = "car"


class PlaneItem(BaseItem):
    type: str = "plane"
    size: int


items = {
    "item1": {"description": "All my friends drive a low rider", "type": "car"},
    "item2": {
        "description": "Music is my aeroplane, it's my aeroplane",
        "type": "plane",
        "size": 5,
    },
}


@app.get("/items/{item_id}", response_model=Union[PlaneItem, CarItem])
async def read_item(item_id: str):
    return items[item_id]
```


> 파이썬 3.10+ 에서 Union을 쓰는 이유는 `reponse_model=PlaneItem | CarItem`으로 쓰면 파이썬은 타입 아노테이션으로 인식을 못한다.


## Reponse Status Code

201: 생성된
204: 내용 없음
404: 찾을 수 없음


```python
from fastapi import FastAPI

app = FastAPI()


@app.post("/items/", status_code=201)
async def create_item(name: str):
    return {"name": name}
```

```python
from fastapi import FastAPI, status # <--

app = FastAPI()


@app.post("/items/", status_code=status.HTTP_201_CREATED)
async def create_item(name: str):
    return {"name": name}
```

- `status`를 import해 `HTTP_201_CREATED`와 같은 자동완성을 사용해도 된다.


## Form Data


```python
from typing import Annotated

from fastapi import FastAPI, Form

app = FastAPI()


@app.post("/login/")
async def login(username: Annotated[str, Form()], password: Annotated[str, Form()]):
    return {"username": username}
```

> `<form></form>` 태그는 특별하게 인코딩된 데이터를 넘긴다, JSON이 아니라 따라서 `Form()`을 사용해서 정의해야한다.



## Request Files



```python
from fastapi import FastAPI, File, UploadFile

app = FastAPI()


@app.post("/files/")
async def create_file(file: bytes = File()):
    return {"file_size": len(file)}


@app.post("/uploadfile/")
async def create_upload_file(file: UploadFile):
    return {"filename": file.filename}
```


- `bytes`:
	- 작은 파일에 유리
	- 메모리에 전부 저장됨
	- 
- `UploadFile`:
	- 스풀링 파일을 사용하여 메모리에 저장하고 초과하면 디스크에 저장된다
	- 메타데이터를 얻을 수 있다
	- 비동기 인터페이스를 가지고 있


**UploadFile**

- 속성:
	- `filename`: ex) myimage.png
	- `content_type`: ex) image/jpeg
	- `file`: `SpooledTemporaryFile`
- async 메소드:
	- `write(date)`: data를 파일에 작성
	- `read(size)`: 파일의 사이즈(int)
	- `seek(offset)`: 파일 내 offset(int)위치의 바이트로 이동
	- `close()`: 파일을 닫는다


`bytes`의 `List`또는 `UploadFile`을 통해 여러 파일을 동시에 업로드 할 수있다.

```python
from typing import List

from fastapi import FastAPI, File, UploadFile
from fastapi.response import HTMLResponse

app = FastAPI()


@app.post("/file/")
async def create_file(files: List[bytes] = File()):
	return {"file_size": [len(file) for file in files]}

@app.post("/uploadfiles/")
async def create_upload_files(files: List[UploadFile]):
	return {"filenames": [file.filename for file in files]}


@app.get("/")
async def main():
	content ="""
		<body>
		  <form action="/files/" 
		  enctype="multipart/form-data" 
		  method="post">
		    <input name="files" type="file" multiple>
		    <input type="submit">
		  </form>
		  <form action="/uploadfiles/" 
		  enctype="multipart/form-data" 
		  method="post">
		    <input name="files" type="file" multiple>
		    <input type="submit">
		  </form>
		</body>
		"""
	return HTMLResponse(content=content)
```


## Error Handling


클라이언트에게 에러를 보내야 할때가 있다

- 클라이언트가 권한이 없을때
- 클라이언트가 요청한 아이템이 없을때 
- 등


```python
from fastapi import FastAPI, HTTPException

app = FastAPI()

items = {"foo": "The Foo Wrestlers"}


@app.get("/items/{item_id}")
async def read_item(item_id: str):
    if item_id not in items:
        raise HTTPException(status_code=404, detail="Item not found")
    return {"item": items[item_id]}
```

`HTTPException`은 파이썬 `exception`에 api와 관련된 데이터를 추가한 것이다. 따라서 return 하지 않고 raise를 한다. `exception`이 일어나면 요청은 그 자리에서 종료된다.

```json
{
  "detail": "Item not found"
}
```

커스텀 헤더도 추가 가능하다.

```python
from fastapi import FastAPI, HTTPException

HTTPException(
	status_code=404,
	detail="Item not found",
	headers={"X-Error": "There goes my error"}
)
```


`Exception`을 상속하여 커스텀 exception을 만들 수 있다. `@app.exception_handler()`를 사용하여 만든다.

```python
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse


class UnicornException(Exception):
	def __init__(self, name: str):
		self.name = name

app = FastAPI()


@app.exception_handler(UnicornException)
async def unicorn_exception_handler(request: Request, e: UnicornException):
	return JSONResponse(
		status_code=418,
		content={"message": f"Oops! {e.name} did something."})


@app.get("/unicorns/{name}")
async def read_unicorn(name: str):
	if name == "yolo":
		raise UnicornException(name=name)
	return {"unicorn_name": name}
```


exception handler의 재사용

```python
from fastapi.exception_handlers import ( 
	http_exception_handler, 
	request_validation_exception_handler, 
)
```


## Path Operation Configuration

path operation 데코레이터에 여러 매개변수를 더해 추가적인 설정을 할 수 있다

status code, tag, summary, description 등 추가할 수 있다.

```python
from fastapi import FastAPI, status
from pydantic import BaseModel

app = FastAPI()


class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    tax: float | None = None
    tags: set[str] = set()


@app.post("/items/", response_model=Item, 
		  status_code=status.HTTP_201_CREATED, # <-- status code
		  tags=["items"], # <-- tags
		  summary="Create an item", # <-- summary
		  description="Create an item with all the info") # <-- desc 
async def create_item(item: Item):
    return item


```


- description을 docstring으로 마크다운을 통해 작성도 가능하다.


## JSON Encoder

데이터베이스에 저장을 하기 위해서 데이터 유형(Pydantic 모델)을 JSON과 호환 가능한 형태로 반환해야 할 수도 있다.



```python
from datetime import datetime
from typing import Union

from fastapi import FastAPI
from fastapi.encoders import jsonable_encoder # <--
from pydantic import BaseModel

fake_db = {}


class Item(BaseModel):
    title: str
    timestamp: datetime
    description: Union[str, None] = None


app = FastAPI()


@app.put("/items/{id}")
def update_item(id: str, item: Item):
    json_compatible_item_data = jsonable_encoder(item) # <--
    fake_db[id] = json_compatible_item_data
```

> `datetime`은 JSON과 호환되는 데이터가 아니므로 str형로 변환해야한다.


## Body - Updates


`PUT`, `PATCH` 차이는 전체를 대체하느냐 부분적으로 바꾸느냐의 차이이다.

```python
from fastapi import FastAPI
from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel

app = FastAPI()

class Items(BaseModel):
	name: str | None = None
	description: str | None = None
	price: float | None = None
	tax: float = 10.5
	tags: list[str] = []


items = {
		 "foo": {"name": "Foo", "price": 50.2},
		 "bar": {"name": "Bar", "desciption": "The Bar", "price": 50.2},
		 "baz": {"name": "Baz", "description": None, "price": 50.2},
}


@app.get("/items/{item_id}", response_model=Item)
async def read_items(item_id: str):
	return items[item_id]

@app.put("/items/{item_id}", response_model=Item)
async def update_items(item_id: str, item: Item):
	update_item_encoded = jsonable_encoder(item)
	items[item_id] = update_item_encoded
	return update_item_encoded
```


```json
{
    "name": "Barz",
    "price": 3,
    "description": None,
}
```


하지만 만약 위의 값으로 bar를 업데이트 하려고 한다면 Pydantic모델의 초기 tax값은 10.5이라서 20.2 -> 10.5로 바뀌고 만다.

이를 해결하려면 Pydantic 모델에 `.dict(exclude_unset=True)`와 FastAPI의 `patch`를 사용하면 된다

```python
from fastapi import FastAPI
from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel

app = FastAPI()


class Item(BaseModel):
    name: str | None = None
    description: str | None = None
    price: float | None = None
    tax: float = 10.5
    tags: list[str] = []


items = {
    "foo": {"name": "Foo", "price": 50.2},
    "bar": {"name": "Bar", "description": "The bartenders", "price": 62, "tax": 20.2},
    "baz": {"name": "Baz", "description": None, "price": 50.2, "tax": 10.5, "tags": []},
}


@app.get("/items/{item_id}", response_model=Item)
async def read_item(item_id: str):
    return items[item_id]


@app.patch("/items/{item_id}", response_model=Item) # <--
async def update_item(item_id: str, item: Item):
    stored_item_data = items[item_id]
    stored_item_model = Item(**stored_item_data)
    update_data = item.dict(exclude_unset=True) # <--
    updated_item = stored_item_model.copy(update=update_data)
    items[item_id] = jsonable_encoder(updated_item)
    return updated_item
```


**데이터의 흐름**:

1. `PATCH`나 `PUT`을 사용
2. 저장된 데이터 가져오기
3. 데이터를 Pydantic모델에 넣기
4. 들어온 모델에서 초기값을 빼고 `dict`를 생성하기(`exclude_unset` 사용)
5. `update` 매개변수를 이용하여 저장된 모델의 복사본 만들기
6. 복사된 모델을 인코딩해 데이터베이스에 저장하기
7. 업데이트된 모델 리턴하기



## Dependencies

의존성 주입이 유용한 경우:

- 같은 로직을 공유할 때
- 데이터베이스 연결을 공유할떄
- 보안, 인증, 등이 필요할때
- 등



```python
from typing import Annotated

from fastapi import Depends, FastAPI # <--

app = FastAPI()


async def common_parameters(q: str | None = None, skip: int = 0, limit: int = 100):
    return {"q": q, "skip": skip, "limit": limit}


@app.get("/items/")
async def read_items(commons: Annotated[dict, Depends(common_parameters)]): # <--
    return commons


@app.get("/users/")
async def read_users(commons: Annotated[dict, Depends(common_parameters)]): # <--
    return commons
```


```python
from fastapi import Depends, FastAPI

app = FastAPI()


fake_items_db = [{"item_name": "Foo"}, {"item_name": "Bar"}, {"item_name": "Baz"}]


class CommonQueryParams:
    def __init__(self, q: str | None = None, skip: int = 0, limit: int = 100):
        self.q = q
        self.skip = skip
        self.limit = limit


@app.get("/items/")
async def read_items(commons: CommonQueryParams = Depends(CommonQueryParams)):
    response = {}
    if commons.q:
        response.update({"q": commons.q})
    items = fake_items_db[commons.skip : commons.skip + commons.limit]
    response.update({"items": items})
    return response
```

```python
commons: CommonQueryParams = Depends()
```

위처럼 쓸 수도 있다


### Sub-dependencies

```python
from typing import Annotated

from fastapi import Cookie, Depends, FastAPI

app = FastAPI()


def query_extractor(q: str | None = None):
    return q


def query_or_cookie_extractor(
    q: Annotated[str, Depends(query_extractor)], # <--
    last_query: Annotated[str | None, Cookie()] = None,
):
    if not q:
        return last_query
    return q


@app.get("/items/")
async def read_query(
    query_or_default: Annotated[str, Depends(query_or_cookie_extractor)] # < --
):
    return {"q_or_cookie": query_or_default}
```


의존에 의존을 더한다


### Dependencies in decorators

```python
from typing import Annotated

from fastapi import Depends, FastAPI, Header, HTTPException

app = FastAPI()


async def verify_token(x_token: Annotated[str, Header()]):
    if x_token != "fake-super-secret-token":
        raise HTTPException(status_code=400, detail="X-Token header invalid")


async def verify_key(x_key: Annotated[str, Header()]):
    if x_key != "fake-super-secret-key":
        raise HTTPException(status_code=400, detail="X-Key header invalid")
    return x_key


@app.get("/items/", dependencies=[Depends(verify_token), Depends(verify_key)])
async def read_items():
    return [{"item": "Foo"}, {"item": "Bar"}]
```


데코레이터에 의존성을 주입하면 값은 리턴하지 않아도 실행을 시킬수 있다.

`dependecies` 매개변수에 리스트 형태로 넘겨줄수 있다.



### Global Dependencies

전체 어플리케이션에 의존성을 주입시킬 수도 있다

```python
from fastapi import Depends, FastAPI, Header, HTTPException
from typing_extensions import Annotated


async def verify_token(x_token: Annotated[str, Header()]):
    if x_token != "fake-super-secret-token":
        raise HTTPException(status_code=400, detail="X-Token header invalid")


async def verify_key(x_key: Annotated[str, Header()]):
    if x_key != "fake-super-secret-key":
        raise HTTPException(status_code=400, detail="X-Key header invalid")
    return x_key


app = FastAPI(dependencies=[Depends(verify_token), Depends(verify_key)]) # <--


@app.get("/items/")
async def read_items():
    return [{"item": "Portal Gun"}, {"item": "Plumbus"}]


@app.get("/users/")
async def read_users():
    return [{"username": "Rick"}, {"username": "Morty"}]
```



### Dependencies with yield



```python
from typing import Annotated

from fastapi import Depends


async def dependency_a():
    dep_a = generate_dep_a()
    try:
        yield dep_a
    finally:
        dep_a.close()


async def dependency_b(dep_a: Annotated[DepA, Depends(dependency_a)]):
    dep_b = generate_dep_b()
    try:
        yield dep_b
    finally:
        dep_b.close(dep_a)


async def dependency_c(dep_b: Annotated[DepB, Depends(dependency_b)]):
    dep_c = generate_dep_c()
    try:
        yield dep_c
    finally:
        dep_c.close(dep_b)
```



## Security


**OAuth2**

OAuth2는 인증과 권한부여을 처리하는 여러 방법 가지고있다. 페이스북, 구글, 트위터, 깃허브로 로그인하기 등 서드 파티도 지원한다.

**OpenID Connect**

OAuth2를 기반으로, OAuth2에서 애매한 것들을 구체화해 확장한 것이다

**Open API**

FastAPI는 Open API를 기반으로 만들어졌다

Open API는 다양한 보안 스키마를 가지고있다.

- `apiKey`: 쿼리 매개변수, 헤더, 쿠키에서 오는 키들
- `http`: bearer, HTTP Basic authentication, HTTP Digest 등 http authenication 표준 시스템
- `oauth2`: OAuth2 보안 처리에 관한 모든 것들 
- `openIdConnect`: OAuth2 인증 데이터를 자동으로 찾는다



```python
from typing import Annotated

from fastapi import Depends, FastAPI
from fastapi.security import OAuth2PasswordBearer # <--

app = FastAPI()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token") # <--


@app.get("/items/")
async def read_items(token: Annotated[str, Depends(oauth2_scheme)]):
    return {"token": token}
```


> http://127.0.0.1:8000/docs 에서 `Authorize`를 사용하면 로그인을 테스트할 수 있다.


**Password Flow**

1. 프론트단에서 `username`, `password`를 적는다
2. 프론트엔드는 전해진 API의 URL에 데이터를 보낸다(`tokenUrl="token"`)

3. API가 데이터를 확인한뒤 응답으로 토큰을 넘긴다(토큰은 단순한 문자열이고 유저를 확인하기 위해 사용되며 유통기한이 있고 프론트단에서 임시 저장을 하고 기한이 끝내면 다시 인증을 받아야한다)

4. 특정 엔드포인트에서 백엔드에 요청할 일이 생길때 프론트엔드는 헤더에 `Bearer`와 토큰 값을 함께 보내 권한부여를 요청한다
5. 만약 토큰이 `foobar`를 포함하면 권한부여 헤더는 `Bearer foobar`이 될것이다.


**OAuth2 & Bearer**

OAuth2를 사용하면 유저는 반드시 `username`, `password`를 보내야하고 field이름도 같아야한다.

```python
from typing import Annotated

from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import Basemodel

fake_users_db = { 
	"johndoe": { 
		"username": "johndoe", 
		"full_name": "John Doe", 
		"email": "johndoe@example.com", 
		"hashed_password": "fakehashedsecret", 
		"disabled": False, 
	}, 
	"alice": { "username": "alice", 
		"full_name": "Alice Wonderson", 
		"email": "alice@example.com", 
		"hashed_password": "fakehashedsecret2", 
		"disabled": True, 
	}, 
}

app = FastAPI()


def fake_hash_password(password: str):
	return "fakehashed" + password


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

class User(BaseModel):
	username: str
	email: str | None = None
	full_name: str | None = None
	disabled: bool | None = None


class UserInDB(User):
	hashed_password: str


def get_user(db, username: str);
	if username in db:
		user_dict = db[username]
		return UserInDB(**user_dict)


def fake_decode_token(token):
	# unsecure
	user = get_user(fake_user_db, token)
	return user


async def get_current_user(token: Annotated[str, Depends(oauth2_scheme)]):
	user = fake_decode_token(token)
	if not user:
		raise HTTPException(
			status_code=status.HTTP_401_UNAUTHORIZED,
			detail="Invalid",
			headers={"WWW-Authenticate": "Bearer"},
		)
	return user

async def get_current_active_user(
	current_user: Annotated[user, Depends(get_current_user)]
):
	if current_user:
		raise HTTPException(status_code=400, detail="Inactive user")
	return current_user

@app.post("/token/")
async def login(form_data: Annotated[OAuth2PasswordRequestFrom, Depends()]:
	user_dict = fake_user_db.get(form_data.username)
	if not user_dict:
		raise HTTPException(status_code=400,
			detail="Incorrect username or password")

	user = UserInDB(**user_dict)
	hashed_password = fake_hash_password(form_data.password)
	if not hashed_password == user.hashed_password:
		raise HTTPException(status_code=400,
			detail="Incorrect username or password")

	return {"access_token": user.username, "token_type": "bearer"}
	# 응답은 토큰이어야하고 JSON이며 `access_token`, `token_type`을 요구한다

@app.get("/users/me"):
async def read_users_me(
	current_user: Annotated[User, Depends(get_currnent_active_user)]
):
	return current_user
```


> `OAuth2PasswordRequestForm`은 FastAPI의 특수한 클래스가 아니다. 단지 보안 scheme를 알려주려는 것이다. 이것은 그저 클래스 dependency이고 사용자가 직접 작성할 수도 있지만 편의성을 위해 FastAPI가 제공하는 것이다.


**JWT**

JSON Web Tokens은 JSON 객체를 공백없는 문자열로 만드는 것이다. JWT는 서명이 되어 있는지에 따라 인증 여부를 정한다.

- [JSON Web Tokens - jwt.io](https://jwt.io/)

```python
from datetime import datetime, timedelta
from typing import Annotated

from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import JWTError, jwt
from passlib.context import CryptContext
from pydantic import BaseModel

# to get a string like this run:
# openssl rand -hex 32
SECRET_KEY = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30


fake_users_db = {
    "johndoe": {
        "username": "johndoe",
        "full_name": "John Doe",
        "email": "johndoe@example.com",
        "hashed_password": "$2b$12$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW",
        "disabled": False,
    }
}


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: str | None = None


class User(BaseModel):
    username: str
    email: str | None = None
    full_name: str | None = None
    disabled: bool | None = None


class UserInDB(User):
    hashed_password: str


pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

app = FastAPI()


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password):
    return pwd_context.hash(password)


def get_user(db, username: str):
    if username in db:
        user_dict = db[username]
        return UserInDB(**user_dict)


def authenticate_user(fake_db, username: str, password: str):
    user = get_user(fake_db, username)
    if not user:
        return False
    if not verify_password(password, user.hashed_password):
        return False
    return user


def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


async def get_current_user(token: Annotated[str, Depends(oauth2_scheme)]):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except JWTError:
        raise credentials_exception
    user = get_user(fake_users_db, username=token_data.username)
    if user is None:
        raise credentials_exception
    return user


async def get_current_active_user(
    current_user: Annotated[User, Depends(get_current_user)]
):
    if current_user.disabled:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user


@app.post("/token", response_model=Token)
async def login_for_access_token(
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()]
):
    user = authenticate_user(fake_users_db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}


@app.get("/users/me/", response_model=User)
async def read_users_me(
    current_user: Annotated[User, Depends(get_current_active_user)]
):
    return current_user


@app.get("/users/me/items/")
async def read_own_items(
    current_user: Annotated[User, Depends(get_current_active_user)]
):
    return [{"item_id": "Foo", "owner": current_user.username}]
```


JWT는 `sub`라는 것이 있다(subject of the token). JWT는 유저 인증말고도 토큰을 제공하면 사용자는 계정을 보유할 필요없이 토큰만으로 작업을 할 수 있게 된다.



## Middleware

미들웨어란 모든 요청에 대해 path operation이 수행되기전 실행되느 함수이다.
또한 모든 응답에 대해서도 응답을 리턴하기 전에 실행되는 함수도 미들웨어다.

```python
import time

from fastapi import FastAPI, Request

app = FastAPI()


@app.middleware("http")
async def add_process_time_header(request: Request, call_next):
	start_time = time.time()
	reponse = await call_next(request)
	process_time = time.time() - start_time
	response.header["X-Process-Time"] = str(process_time)
	return response
```

- 위 예제는 응답의 수행시간을 측정하여 커스텀 헤더에 넣어 유저에게 전달한다


## CORS


> `CORS`는 프론트가 백엔드와 소통하는 자바스크립트 코드를 가지고 있는데 서로 Origin이 다를 때 생긴다.


- `Origin` = 프로토콜 + 도메인 + 포트


```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
	"http://localhost.test.com",
	"https://localhost.test.com",
	"http://localhost",
	"http://localhost:8080",
]


app.add_middleware(
	CORSMiddleware,
	allow_origins=orgins,
	allow_credetials=orgins,
	allow_methods=["*"],
	allow_headers=["*"],
)


@app.get("/")
async def main():
	return {"message": "Hello World!"}
```


- [교차 출처 리소스 공유 - FastAPI (tiangolo.com)](https://fastapi.tiangolo.com/ko/tutorial/cors/)

## SQL(Relational) DB



```python
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "sqlite:///./sql_app.db"
# SQLALCHEMY_DATABASE_URL = "postgresql://user:password@postgresserver/db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
```


```python
connect_args={"check_same_thread": False}
```

- SQLite만 필요한 매개변수




```python
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from .database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)

    items = relationship("Item", back_populates="owner")


class Item(Base):
    __tablename__ = "items"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String, index=True)
    owner_id = Column(Integer, ForeignKey("users.id"))

    owner = relationship("User", back_populates="items")
```




```python
from pydantic import BaseModel


class ItemBase(BaseModel):
    title: str
    description: str | None = None


class ItemCreate(ItemBase):
    pass


class Item(ItemBase):
    id: int
    owner_id: int

    class Config:
        orm_mode = True


class UserBase(BaseModel):
    email: str


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id: int
    is_active: bool
    items: list[Item] = []

    class Config:
        orm_mode = True
```



- `Pydantic`: API에서 읽을 데이터의 형식을 지정하는 모델
- `SQLAlchemy`: 실제 데이터베이스에 넣을때 사용하는 모델


```python
class Config:
	orm_mode = True
```

`orm_mode`는 Pydantic 모델을 dict형식이 아니더라도 읽을 수 있게 해준다



```python
from sqlalchemy.orm import Session

from . import models, schemas


def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()


def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()


def create_user(db: Session, user: schemas.UserCreate):
    fake_hashed_password = user.password + "notreallyhashed"
    db_user = models.User(email=user.email, hashed_password=fake_hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def get_items(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Item).offset(skip).limit(limit).all()


def create_user_item(db: Session, item: schemas.ItemCreate, user_id: int):
    db_item = models.Item(**item.dict(), owner_id=user_id)
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item
```




```python
from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/users/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_user(db=db, user=user)


@app.get("/users/", response_model=list[schemas.User])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = crud.get_users(db, skip=skip, limit=limit)
    return users


@app.get("/users/{user_id}", response_model=schemas.User)
def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = crud.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user


@app.post("/users/{user_id}/items/", response_model=schemas.Item)
def create_item_for_user(
    user_id: int, item: schemas.ItemCreate, db: Session = Depends(get_db)
):
    return crud.create_user_item(db=db, item=item, user_id=user_id)


@app.get("/items/", response_model=list[schemas.Item])
def read_items(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    items = crud.get_items(db, skip=skip, limit=limit)
    return items
```


## Bigger App - Multiple Files


```md
.
├── app
│   ├── __init__.py
│   ├── main.py
│   ├── dependencies.py
│   └── routers
│   │   ├── __init__.py
│   │   ├── items.py
│   │   └── users.py
│   └── internal
│       ├── __init__.py
│       └── admin.py
```



```python
from fastapi import APIRouter, Depends, HTTPException

from ..dependencies import get_token_header

router = APIRouter(
    prefix="/items",
    tags=["items"],
    dependencies=[Depends(get_token_header)],
    responses={404: {"description": "Not found"}},
)


fake_items_db = {"plumbus": {"name": "Plumbus"}, "gun": {"name": "Portal Gun"}}


@router.get("/")
async def read_items():
    return fake_items_db


@router.get("/{item_id}")
async def read_item(item_id: str):
    if item_id not in fake_items_db:
        raise HTTPException(status_code=404, detail="Item not found")
    return {"name": fake_items_db[item_id]["name"], "item_id": item_id}


@router.put(
    "/{item_id}",
    tags=["custom"],
    responses={403: {"description": "Operation forbidden"}},
)
async def update_item(item_id: str):
    if item_id != "plumbus":
        raise HTTPException(
            status_code=403, detail="You can only update the item: plumbus"
        )
    return {"item_id": item_id, "name": "The great Plumbus"}
```



```python
from fastapi import Depends, FastAPI

from .dependencies import get_query_token, get_token_header
from .internal import admin
from .routers import items, users

app = FastAPI(dependencies=[Depends(get_query_token)])


app.include_router(users.router)
app.include_router(items.router)
app.include_router(
    admin.router,
    prefix="/admin",
    tags=["admin"],
    dependencies=[Depends(get_token_header)],
    responses={418: {"description": "I'm a teapot"}},
)


@app.get("/")
async def root():
    return {"message": "Hello Bigger Applications!"}
```


- 라우터를 커스텀해서 한곳에서만 다르게 쓸 수도 있다


## Background Tasks



```python
from typing import Annotated

from fastapi import BackgroundTasks, Depends, FastAPI

app = FastAPI()


def write_log(message: str):
    with open("log.txt", mode="a") as log:
        log.write(message)


def get_query(background_tasks: BackgroundTasks, q: str | None = None):
    if q:
        message = f"found query: {q}\n"
        background_tasks.add_task(write_log, message)
    return q


@app.post("/send-notification/{email}")
async def send_notification(
    email: str, background_tasks: BackgroundTasks, q: Annotated[str, Depends(get_query)]
):
    message = f"message to {email}\n"
    background_tasks.add_task(write_log, message)
    return {"message": "Message sent"}
```



## Metadata & Docs URLs


| 매개변수 | 설명 |
| ---- | ---- |
| `title` | API의 제목 |
| `summary` | 짧은 설명 |
| `description` | 마크다운을 사용한 설명 |
| `version` | 버전 |
| `terms_of_service` | API의 URL |
| `contact` | 연락처 |
| `license_info` | 라이센스 정보 |



```python
from fastapi import FastAPI

description = """
ChimichangApp API helps you do awesome stuff. 🚀

## Items

You can **read items**.

## Users

You will be able to:

* **Create users** (_not implemented_).
* **Read users** (_not implemented_).
"""

app = FastAPI(
    title="ChimichangApp",
    description=description,
    summary="Deadpool's favorite app. Nuff said.",
    version="0.0.1",
    terms_of_service="http://example.com/terms/",
    contact={
        "name": "Deadpoolio the Amazing",
        "url": "http://x-force.example.com/contact/",
        "email": "dp@x-force.example.com",
    },
    license_info={
        "name": "Apache 2.0",
        "identifier": "MIT",
    },
)


@app.get("/items/")
async def read_items():
    return [{"name": "Katana"}]
```




## Static Files



```python
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")
```



## Testing

```python
from fastapi.testclient import TestClient

from .main import app

client = TestClient(app)


def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"msg": "Hello World"}
```


## Debugging


```python
import uvicorn
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def root():
    a = "a"
    b = "b" + a
    return {"hello world": b}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
```



