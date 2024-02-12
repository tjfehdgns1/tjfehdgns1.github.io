---
title: Cartridge Date
tags:
  - PICO-8
date: 2024-02-11T15:40:00
---
--- 

## API

```lua
function _init()
  local cart_id="username_game_title_v1"
  local data_loaded=cartdata(cart_id)
  if not data_loaded then
    for i=0,63 then
      dset(i,0)
    end
    cartdata(cart_id)
  end

  for i=0,63 do
    local value=dget(i)
    print("Data at index",i,":",value)
  end
end

function _update60()
end

function _draw()
end
```

- `cartdate(id)`: 카트에 카트리지 데이터를 설정한다.
- `dget(index)`: 카트리지 데이터의 값을 불러온다.
- `dset(index,val)`: 카트리지 데이터의 값을 지정한다.

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