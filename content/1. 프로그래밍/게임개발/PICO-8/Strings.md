---
title: Strings
tags:
  - PICO-8
date: 2024-02-10T19:52:00
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

- `split(str,[separator],[convert_num]`: seperator를 기준으로 문자열을 테이블로 나눈다.
	- str: 문자열
	- seperator: 디폴트(`'`) 
	- convert_numbers: 참이면 숫자로 저장됨
- `sub(str,from,[to])`: 하위 문자열을 불러온다.
	- str: 기준이될 문자
	- from: 시작
	- to: 끝
- `chr(num)`: 
- `ord(str,[index])`:
	- str: 
	- index: 
- `tonum(val,[format_flags])`: 
	- val: 
	- format_flags: 
- `tostr(val,[usehex])`: 
	- val: 
	- usehex: 

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
