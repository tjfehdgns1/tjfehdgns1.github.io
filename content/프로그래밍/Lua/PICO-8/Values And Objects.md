---
title: Values And Objects
tags:
  - PICO-8
date: 2024-02-10T20:32:00
---
--- 

## API

```lua
object={
  x=0,
  y=0,
  c=7
}
object.__index=object

function object:new(o)
  return setmetatable(o or {}, self)
end

function _init()
  obj1=object:new()
  print(obj1.x)
  print(obj1.y)
  print(obj1.c)
end

function _update60()
end

function _draw()
end
```

- `setmetatable(tb1,metatb1)`: 테이블에 메타테이블을 업데이트한다.
- `getmetatable(tb1)`: 메타테이블을 가져온다.
- `rawequal(t1,t2)`: 같은 메타테이블인지 비교한다.
- `rawget(t,n)`: 메타테이블의 키 값을 통해 값을 불러온다.
- `rawlen(t)`: 메타테이블의 길이를 반환한다.
- `rawset(t,n,v)`: 메타테이블에 키와 값을 입력한다.
- `select(i,...)`: 입력한 인덱스로부터 마지막까지 반환한다.
- `type(v)`: 타입을 반환한다. 

---

### 메타테이블

- `__index`: 메타테이블을 정의한다.

---

`Table Of Content`

- [[Game Loop]]
- [[Graphics]]
- [[Tables]]
- [[Input]]
- [[Sound]]
- [[Map]]
- [[Memory]]
- [[Math]]
- [[Cartridge Date]]
- [[Coroutines]]
- [[Strings]]
- [[Values And Objects]]
- [[Time]]
- [[System]]
- [[Debugging]]
