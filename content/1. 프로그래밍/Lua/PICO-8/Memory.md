---
title: Memory
tags:
  - PICO-8
date: 2024-02-11T12:14:00
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

- `cstore(destaddr,sourceaddr,len,[filename])`: 카트리지 파일에 있는 메모리 영역을 다른 카트리지 파일로 저장하거나 현재 카트리지 파일에 저장한다.
	- destaddr: 저장할 메모리 영역의 대상 주소
	- sourceaddr: 저장할 메모리 영역의 소스 주소
	- len: 메모리의 길이
	- filename: 카트리지 파일의 이름
- `memcpy(destaddr,sourceaddr,len)`: 메모리의 한 영역을 다른 영역으로 데이터를 복사한다.
	- destaddr: 복사할 데이터의 대상 주소
	- sourceaddr: 복사할 데이터의 소스 주소
	- len: 데이터의 길이
- `memset(destaddr,val,len)`: 메모리의 한 영역에 지정된 바이트 값을 설정한다.
	- destaddr: 시작 주소
	- val: 바이트 값
	- len: 메모리 영역의 길이
- `peek(addr,[n])`: 메모리의 연속된 위치에서 하나 이상의 바이트를 읽어온다.
	- addr: 시작 메모리 주소
	- n: 반환할 바이트의 수
- `poke(addr,[val],[...])`: 메모리의 연속된 위치에서 하나 이상의 바이트를 입력한다.
	- addr: 시작 메모리 주소
	- val: 메모리에 쓸 바이트값
- `reload(destaddr,sourceaddr,len,[filename])`: 카트리지에서 데이터 영역을 메모리로 로드한다.
	- destaddr: 시작 메모리 주소
	- sourceaddr: 카트리지 데이터의 첫 주소
	- len: 메모리 영역의 길이
	- filename: 로드할 카트리지 파일의 이름
- `serial(channel,sourceaddr,size)`: 시리얼 채널에서 데이터를 보내거나 받는다.
	- channel: 채널 ID
	- sourceaddr: 읽거나 쓸 메모리 주소
	- size: 읽거나 쓸 바이트 수

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