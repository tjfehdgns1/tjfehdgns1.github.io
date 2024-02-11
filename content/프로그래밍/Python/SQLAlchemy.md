---
title: SQLAlchemy
tags:
  - SQL
  - 파이썬
date: 2024-01-10T19:38:00
---
---

SQLAlchemy는 대표적인 파이썬 orm이다

## ORM이란?



## 작동원리

SQLAlchemy는 내부적으로 **psycopg2** 드라이버를 통해 SQL서버와 소통을 한다.
따라서 **psycopg2**을 import하야하며

`database.py`
```python
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "postgresql://postgres:seol224@localhost/fastapi"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
```

위의 코드를 통해 엔진을 만든다.

`postgresql://<db_user>:<password>@<db_host>/<db_name>`을 통해 주소를 등록한다.

`model.py`
```python
from sqlalchemy import Boolean, Integer, String, Column
from sqlalchemy.sql.sqltypes import TIMESTAMP
from sqlalchemy.sql.expression import text

from .database import Base


class Posts(Base):
    __tablename__ = 'posts'

    id = Column(Integer, primary_key=True, nullable=False)
    title = Column(String, nullable=False)
    body = Column(String, nullable=False)
    published = Column(Boolean, server_default='True', nullable=False)
    created_at = Column(TIMESTAMP(timezone=True), 
				    server_default=text("now()"), nullable=False)
```

그리고 모델을 만들어 SQL데이터베이스에 어떻게 저장될건지 테이블을 만들어준다.

## Query

#### SELECT

```python
from sqlalchemy.orm import Session as session

posts = session.query(Posts).all()
```

```sql
SELECT * FROM posts;
```

#### Filter

```python
from sqlalchemy.orm import Session as session

filterd_posts = session.query(Posts).filter_by(title="dummy title").first()
```

```sql
SELECT * FROM posts
WHERE title="dummy title" LIMIT 1;
```

#### INSERT

```python
from sqlalchemy.orm import Session as session

new_post = Posts(title="new title", body="dummy body")
session.add(new_post)
session.commit()
```

```sql
INSERT INTO posts (title, body)
VALUES ('new title', 'dummy body');
```

#### UPDATE

```python
from sqlalchemy.orm import Session as session

post_to_update = session.query(Posts).filter_by(title='first post').first()
post_to_update.body = "new body"
session.commit()
```

```sql
UPDATE posts SET body='new body'
WHERE title='first post';
```

#### DELETE

```python
from sqlalchemy.orm import Session as session

post_to_delete = session.query(Posts).filter_by(title='first post').first()
session.delete(post_to_delete)
session.commit()
```

```sql
DELETE FROM posts
WHERE title='first post';
```


---


- [SQLAlchemy - The Database Toolkit for Python](https://www.sqlalchemy.org/)