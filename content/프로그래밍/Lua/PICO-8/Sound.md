---
title: Sound
tags:
  - PICO-8
date: 2024-02-03T21:09:00
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

- `music([n],[fade_len],[channel_mask])`: 음악을 재생한다.
	- n: 시작할 패턴의 숫자, 또는 정지할려면 -1
	- fade_len: 0이 아니면 입력한 숫자만큼 페이드 인or아웃
	- channel_mask: 채널 마스크
- `sfx(n,[channel],[offest])`: 음향 효과를 재생한다.
	- n: 재생할 음향 효과의 숫자
	- channel: 재생할 채널의 숫자
	- offset: 어디서부터 재생할지

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

