---
title: Math
tags:
  - PICO-8
date: 2024-02-10T15:32:00
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

- `abs(x)`: 절대값
- `atan2(dx,dy)`: 라디안 값을 반환한다.
- `ceil(x)`: 천장에 가깝게 정수화한다.
- `cos(x)`: 코사인 값을 반환한다.
- `flr(x)`: 바닥에 가깝게 정수화한다.
- `max(x,y)`: 최댓값
- `mid(x,y,z)`: 중간값
- `min(x,y)`: 최솟값
- `rnd(x)`: 랜덤값
- `sgn(x)`: 숫자의 부호를 1,-1로 반환한다.
- `sin(x)`: 사인 값을 반환한다.
- `sqrt(x)`: 제곱
- `srand(x)`: 시드의 난수값을 초기화한다.

---

### 비고

atan 과 atan2 비교

atan과 atan2는 두 점 사이의 세타의 절대각을 구하는 함수이다.

atan은 두 점 사이의 탄젠트값을 받아 각을 구하고 -pi/2 에서 pi/2의 라디안 값을 변환한다.

atan2는 두 점 사이의 상대좌표를 받아 절대각을 -pi에서 pi의 라디안 값을 반환한다.

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
