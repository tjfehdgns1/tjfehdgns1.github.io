---
title: Map
tags:
  - PICO-8
date: 2024-02-10T15:29:00
---
--- 

## API

```lua
function _init()
end

function _update60()
end

function _draw()
end
```

- `map(cel_x,cel_y,sx,sy,cel_w,cel_h,[layer])`: 그래픽 버퍼에 맵의 부분을 그린다.
	- cel_x: 
	- cel_y: 
	- sx: 
	- sy: 
	- cel_w: 
	- cel_h: 
	- layer: 
- `mget(x,y)`: 맵에 있는 cel의 스프라이트 숫자를 불러온다.
	- x: x 좌표
	- y: y 좌표
- `mset(x,y,v)`: 맵에 있는 cel에 스프라이트 숫자를 지정한다.
	- x: x 좌표
	- y: y 좌표
	- v: 저장할 스프라이트 숫자

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