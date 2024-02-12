---
title: Debugging
tags:
  - PICO-8
date: 2024-02-11T11:01:00
---
--- 

## API

```lua
function log(text,overwrite)
  printh("log: "..text,"/log",overwrite)
end

function _init()
end

function _update60()
end

function _draw()
end
```

- `assert(cond,[message])`: 조건문이 거짓이면 런타임 에러를 일으킨다.
	- cond: 조건
	- message: 출력할 메세지
- `printh(str,[filename],[overwrite]`: 파일이나 클립보드에 콘솔에 입력된 문자열을 출력한다.
	- str: 문자열
	- filename: 파일 위치
	- overwrite: 덮어쓸지 결정한다.
- `stat(n)`: 현재 런타임 환경의 정보를 반환한다.
- `stop([message],[x],[y],[col])`: 프로그램을 정지하고 커맨드창으로 반환한다.
	- message: 메세지
	- x: x좌표
	- y: y좌표
	- col: 색상
- `trace([coroutine],[message],[skip])`: 현재 콜스택에 있는 것을 문자열로 반환한다.
	- coroutine: 
	- message: 메세지
	- skip: 

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