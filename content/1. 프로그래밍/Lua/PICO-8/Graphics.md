---
title: Graphics
tags:
  - PICO-8
date: 2024-01-26T09:53:00
---
---


## API

```lua
function _draw()
  cls()
  if btnp(4) then
    for i=0,4 do
	  camera(rnd(3),rnd(3))
    end
  end
  circ(rnd(4),rnd(4),4,7)
  circfill(rnd(4),rnd(4),4,7)
  
end
```

> `_draw()`는 draw state라는 것이 있다. 이것은 `_draw()`함수 내부에는 색을 칠하는 펜이 있는데 이것을 통해 다른 함수들의 기본색을 자동으로 지정한다.

- `camera([x],[y])`: 카메라의 오프셋을 설정. 패러랠 스크롤과 같은 화면효과에 쓰인
	- x: x좌표에서 뺄 오프셋
	- y: y좌표에서 뺄 오프셋
- `circ(x,y,[r],[col])`: 화면에 빈 원을 그린다. 
	- x: 원 중심의 x좌표
	- y: 원 중심의 y좌표
	- r: 원의 반지름
	- col: 색깔 
- `circfill(x,y,[r],[col])`: 화면에 꽉찬 원을 그린다.
	- x: 원 중심의 x좌표
	- y: 원 중심의 y좌표
	- r: 원의 반지름
	- col: 색깔 
- `cls([col])`: 그래픽 버퍼를 없앤다.
	- col: 배경색
- `color(col)`: `draw state`의 색을 지정한다.
	- col: 색깔
- `cursor(x,y,[col])`: `print()`함수의 왼쪽 마진을 지정한다.
	- x: x좌표
	- y: y좌표
	- col: 색깔
- `fget(n,[f])`: 스프라이트의 플래그 값을 불러온다.
	- n: 숫자
	- f: 입력한 플래그 값에 따른 불리언 값을 내보낸다.
- `fillp([pat]`: 패턴을 화면을 채운다.
	- pat: 패턴
- `fset(n,[f],[v])`: 스프라이트의 플래그를 지정한다.
	- n: 숫자
	- f: 플래그
	- v: 참거짓으로 on/off
- `line(x0,y0,x1,y1,[col])`: 선을 그린다.
	- x0: x좌표 시작점
	- y0: y좌표 시작점
	- x1: x좌표 끝점
	- y1: y좌표 끝점
	- col: 색깔
- `pal([c0],[c1],[p])`: 어떠한 색을 다른색으로 변경한다.
	- c0: 기존 색깔
	- c1: 바뀔 색깔
	- p: 작업에 사용할 팔레트를 수정할지, 이미 그려진 화면의 팔레트를 수정할지, 보조화면의 팔레트를 수정할지 0, 1, 2로 정한다.
- `palt([c],[t])`: 어떠한 색의 투명도를 변경한다.
	- c: 색깔
	- t: 참거짓으로 투명할지 정한다.
- `pget(x,y)`: 입력된 좌표에 픽셀의 색을 불러온다.
	- x: x좌표
	- y: y좌표
- `print(str,[x],[y],[col])`: 입력된 문자열을 화면에 출력한다.
	- str: 문자열
	- x: x좌표
	- y: y좌표
	- col: 색상
- `pset(x,y,[c])`: 입력된 좌표에 픽셀을 그린다.
	- x: x좌표
	- y: y좌표
	- c: 색상
- `rect(x0,y0,x1,y1,[col])`: 빈 직사각형을 그린다.
	- x0: x 시작 좌표
	- y0: y 시작 좌표
	- x1: x 끝 좌표
	- y1: y 끝 좌표
	- col: 색상
- `rectfill(x0,y0,x1,y1,[col])`: 꽉찬 직사각형을 그린다.
	- x0: x 시작 좌표
	- y0: y 시작 좌표
	- x1: x 끝 좌표
	- y1: y 끝 좌표
	- col: 색상
- `sget(x,y)`: 스프라이트 쉬트의 색상값을 불러온다.
	- x: x 좌표
	- y: y 좌표
- `spr(n,x,y,[w],[h],[filp_x],[filp_y])`: 스프라이트 혹은 어떠한 범위의 스프라이트를 화면에 그린다.
	- n: 숫자
	- x: x 좌표
	- y: y 좌표
	- w: 넓이
	- h: 높이
	- filp_x: y축 대칭
	- filp_y: x축 대칭
- `sset(x,y,[c])`: 스프라이트 쉬트의 색상값을 지정한다.
	- x: x 좌표
	- y: y 좌표
	- c: 색상
- `sspr(sx,sy,sw,sh,dx,dy,[dw],[dh],[filp_x],[filp_y])`: 
	- sx: 스프라이트 쉬트의 x 좌표
	- sy: 스프라이트 쉬트의 y 좌표
	- sw: 스프라이트 쉬트의 넓이
	- sh: 스프라이트 쉬트의 높이
	- dx: 화면의 x 좌표
	- dy: 화면의 y 좌표
	- dw: 화면의 넓이
	- dh: 화면의 높이
	- filp_x: y축 대칭
	- filp_y: x축 대칭

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