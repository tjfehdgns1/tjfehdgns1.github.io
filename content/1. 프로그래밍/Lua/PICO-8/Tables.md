---
title: Tables
tags:
  - PICO-8
date: 2024-02-10T14:23:00
---

---

## API

```lua
function _init()
  obj={}
  obj.x=64
  obj.y=64
end

function _update60()
end

function _draw()
  cls()
  print(obj["x"])
end
```

- `add(t,v,[i])`: 테이블 끝에 값을 넣는다. 혹은 어디에 넣을지 지정할 수 있다.
	- t: 지정할 테이블
	- v: 넣을 값
	- i: 인덱스
- `all(t)`: 테이블의 모든 값을 이터레이터로 반환한다.
	- t: 지정할 테이블
- `count(t,[v])`: 지정한 테이블의 길이를 반환하거나 어떠한 값의 갯수를 반환한다.
	- t: 지정할 테이블
	- v: 확인할 값
- `del(t,v)`: 지정한 테이블에서 값을 제거
	- t: 지정할 테이블
	- v: 제거할 값
- `deli(t,i)`: 지정한 테이블에서 어떠한 인덱스의 값을 제거
	- t: 지정할 테이블
	- i: 제거할 인덱스
- `foreach(t,f)`: 지정한 테이블의 시퀀스에 있는 각 요소에 함수를 호출한다.
	- t: 지정할 테이블
	- f: 콜백함수
- `ipairs(t)`: 지정한 테이블의 시퀀스에 있는 각 요소에 인덱스와 값을 반환한다.
	- t: 지정할 테이블
- `pack(...)`: 어떠한 값들을 테이블로 만든다.
- `pairs(t)`: 지정한 태이블의 시퀀스에 있는 각 요소를 키와 값으로 반환한다.
	- t: 지정할 테이블
- `unpack(t,[i],[j])`: 지정한 테이블의 요소를 반환한다.
	- t: 지정할 테이블
	- i: 인덱스
	- j: 마지막 인덱스
- `next(t,[key])`: 지정한 테이블의 다음 키와 테이블을 반환한다.
	- t: 지정할 테이블
	- key: 키

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