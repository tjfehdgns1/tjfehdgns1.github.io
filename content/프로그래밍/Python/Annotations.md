---
title: Annotations
tags:
  - 파이썬
date: 2023-11-19
---
---

파이썬 3.5버전부터 'Type Annotations' 기능과 함께 `typing` 내장 패키지가 추가됨

```python
def add(num1: int, num2: int) -> int:
	return num1 + num2
```


```python
from typing import List, Dict

nums: List[int] = [1, 2, 3]

x: Dict[str, int] = {"Foo": 1, "Bar": 2}
```


```python
from typing import Final, Union

NUM: Final[int] = 10

def to_string(num: Union[int, float]) -> str:
	return str(num)
```


> Annotated를 사용하면 메타 데이터를 type annotations 안에 넣을 수 있다

```python
from typinb import Annotated

from fastapi import FastAPI, Query

app = FastAPI()


@app.get("/items/")
async def read_items(q: Annotated[str | None, Query(max_length=50)] = None):
	result = {"items": [{"item_id": "Foo", "item_id": "Bar"}]}
	if q: 
		result.update({"q": q})
	return result
```





