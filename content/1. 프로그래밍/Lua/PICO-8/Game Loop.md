---
title: Game Loop
tags:
  - PICO-8
date: 2024-01-26T09:52:00
---
---

## API

```lua
function _init()
  obj={}
  obj.x=64
  obj.y=64
end

function _update()
  if btn(0) then obj.x-=1
  if btn(1) then obj.x+=1
end

function _update60()
end

function _draw()
  cls()
  spr(1,obj.x,obj.y)
end
```

- `_init()`: 소스코드를 불러올때 이 함수를 한번만 호출한다.
- `_update() & _update60()`: 초당 30또는 60 프레임으로 지속적으로 호출한다. 이 함수의 목표는 유저의 입력을 받아드리고 게임의 중요한 상태를 계산하는데 쓰인다.
- `_draw()`: 초당 30또는 60 프레임으로 map(), spr(), print()등으로 게임의 상태를 그린다. 보통의 `_draw()`함수는 cls()로 시작한다. 하지만 게임이 초당 30 또는 60 프레임 보다 연산이 많아지면 PICO-8은 `draw()`함수를 건너띌 것이다.

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
