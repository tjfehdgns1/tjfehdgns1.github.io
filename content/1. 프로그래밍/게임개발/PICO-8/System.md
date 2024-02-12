---
title: System
tags:
  - PICO-8
date: 2024-02-11T15:27:00
---
--- 

## API

```lua
menuitem(1, "restart puzzle", function() reset_puzzle() sfx(10) end)

function display_hints()
  hint_shown = level_id
end
menuitem(2, "show hints", display_hints)

-- v0.2.0
menuitem(3, "foo", function(b) if (b&1 > 0) then printh("left was pressed") end end)
```

- `menuitem(index,[label],[callback])`: PICO-8 메뉴에 사용자 지정 항목을 추가한다
- `extcmd(cmd)`: 프로그램 내에서 관리 명령을 실행한다.
- `run([str])`: 현재 카트리지를 프로그램의 시작부터 실행한다.

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

---

### 비고

[pico-8.fandom.com/wiki/Extcmd](https://pico-8.fandom.com/wiki/Extcmd)