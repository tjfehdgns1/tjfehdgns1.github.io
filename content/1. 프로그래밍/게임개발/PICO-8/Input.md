---
title: Input
tags:
  - PICO-8
date: 2024-01-26T10:28:00
---
---


## API

```lua
function _update()
	if btn(0) then
	end

	if btn(1) then
	end

	if btnp(4) then
	end

	if btnp(5) then
	end
end
```

- `btn([i],[p])`: 버튼이 눌리면 호출된다.
	- i: 버튼의 숫자
	- p: 플레이어 숫자
- `btnp([i],[p])`: 버튼이 눌렀을때만 호출된다.
	- i: 버튼의 숫자
	- p: 플레이어 숫자

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