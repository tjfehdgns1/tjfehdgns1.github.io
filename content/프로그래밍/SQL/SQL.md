---
title: SQL
tags:
  - SQL
  - 프로그래밍
date: 2023-11-19
---
---
## [[PostgreSQL]]:

**DBSM(DataBase Management System)**: 데이터베이스 관리 시스템, 사용자들이 데이터베이스 내에 데이터를 접근 할 수 있도록 해주는 소프트웨어들을 의미한다.

**DBA(DataBase Administrator)**: 데이터베이스 관리자

> PostgreSQL은 ORDBMS(객체 관계형 데이터베이스)이다. 

```sql
CREATE DATABASE dbname;
\c
CREATE TABLE post (
	id INTEGER,
	title CHARACTER VARYING(50),
	body TEXT,
	created TIMESTAMP WITH TIME ZONE,
)

SELECT id, title FROM post WHERE id > 1 ORDER BY id DESC LIMIT 1;

UPDATE post SET title = 'Delete', body = 'Delete is ...' WHERE id = 4;

DELETE FROM post WHERE id = 4;
```

- `INSERT`: c
- `SELECT`: r
- `UPDATE`: u
- `DELETE`: d

table -> schema -> database -> cluster(database server)

#### 데이터 타입:
 | 분류      | 종류                   | 내용 |
| --------- | ---------------------- | ---- |
| int       | smallint               | 2 bytes     |
|           | int                    | 4 bytes      |
|           | bigint                 | 8 bytes      |
|           | serial                 | unsigned 4 bytes     |
|           | bigserial              | unsigned 8 bytes      |
| float     | real                   |      |
|           | double precision       |      |
|           | numeric                |      |
| string    | text                   |      |
|           | character[(n)]         |      |
|           | character varying[(n)] |      |
| date&time | date                   |      |
|           | time                   |      |
|           | timestamp              |      |
|           | interval               |      |
| bool      | boolean                |      |
| array     | integer[], text[]      |      |
| json      | json                   |      |
|           | jsonb                  |      |
| etc       | 등 너무 많다           |      |



`JOIN`: 관계형 데이터의 핵심



---

## SQL & NOSQL:


| sql        | nosql |
| ---------- | ----- |
| postgresql | mongo db      |
| mysql      | redis(cache/memory)|
| sqlite     |     elastic search(search)  |
| sql server |firebase(realtime/mobile)       |
| oracle     |dynamo db       |
| cockroach db           |       |

sql은 보통 비슷한 문법과 사용방법을 제공한다. 

데이터베이스는 어떠한 환경, 상황에 맞는 용도에 쓰는 것이 중요하다.













---

## ORM:



---
```sql
SELECT <columns> FROM <table>
WHERE <column> = "<something>";
```

```sql
SELECT * FROM Customers
WHERE City = "Seoul";
```

```sql
SELECT * FROM Customers
WHERE NOT City = "Seoul";
```

```sql
SELECT * FROM Customers
WHERE City = "Seoul"
OR City = "Busan";
```

```sql
INSERT INTO Customers (
	CustomerName, 
	ContactName, 
	Address, 
	City, 
	PostalCode, 
	Country
)  
VALUES (
	'Cardinal', 
	'Tom B. Erichsen', 
	'Skagen 21', 
	'Stavanger', 
	'4006', 
	'Norway'
);
```

```sql
SELECT * FROM Customers
WHERE City IS NULL;
```

```sql
UPDATE Customers
SET City = "JeonJu"
```

```sql
UPDATE Customers
SET City = "JeonJu",
WHERE Country = "Korea";
```

```sql
DELETE FROM Customers
WHERE City = "JeonJu"
```

```sql
SELECT MIN(Price)
FROM Products;
```

```sql
SELECT COUNT(*)
FROM Products
WHERE Price > 20;
```

```sql
SELECT AVG(Price)
FROM Products;
```

```sql
SELECT SUM(Price)
FROM Products;
```

```sql
SELECT * FROM Customers
WHERE City LIKE '<char>%';
```

```sql
SELECT * FROM Customers
WHERE City LIKE '<char>_%';
```

```sql
SELECT * FROM Customers
WHERE City LIKE '[a-f]%';
```

```sql
SELECT * FROM Customer
WHERE City IN ('Seoul', 'Busan');
```

```sql
SELECT * FROM Products
WHERE Price BETWEEN 10 AND 20;
```

```sql
SELECT * FROM Products
WHERE City BETWEEN 'Seoul' AND 'Busan';
```

```sql
SELECT CustomerID AS ID  
FROM Customers;
```

```sql
SELECT *
FROM Orders
INNER JOIN Customers
ON Orders.CustomerID=Customers.CustomerID;
```

```sql
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
ORDER BY COUNT(CustomerID) DESC;
```

```sql


```