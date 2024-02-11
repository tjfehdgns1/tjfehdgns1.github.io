---
title: Time
tags:
  - PICO-8
date: 2024-02-11T10:54:00
---
--- 

## API

```lua
function _init()
end

function _update60()
  current_time=time()
end

function _draw()
end
```

- `time()`: Pico-8이 시작후 현재 프레임의 경과 시간을 반환한다. 

> PICO-8의 숫자형은 32767.9999까지 표현 가능하다. 즉 대략 9시간 6분이후에는 문제가 발생할 수 있다. 그리고 `time()`은 `t()`으로 축약이 가능하다. 또한 `stat(90~95)`을 사용하여 현재 시간을 측정할 수 있다.

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