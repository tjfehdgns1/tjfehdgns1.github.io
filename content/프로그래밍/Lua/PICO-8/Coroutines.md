---
title: Coroutines
tags:
  - PICO-8
date: 2024-02-11T15:40:00
---
--- 

## API

```lua
x=4
y=4
cor = nil

function anim()
  for i=4,124,4 do
    x=i
    y=i
    yield()
  end
end

function _update()
  if btnp(5) then
    cor = cocreate(anim)
  end
  if cor and costatus(cor) != 'dead' then
    coresume(cor)
  else
    cor = nil
  end
end

function _draw()
  cls()
  circfill(x, y, 4, 7)
end
```

- `cocreate(func)`: 코루틴을 생성한다.
- `coresume(cor,[...])`: 코루틴은 시작하거나 재개한다.
- `costatus(cor)`: 코루틴 객체의 상태를 테스트한다.
- `yield([...])`: 일시적으로 호출자에게 제어를 반환한다.

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
