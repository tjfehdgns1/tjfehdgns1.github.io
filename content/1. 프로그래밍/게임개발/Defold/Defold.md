---
title: Defold
tags:
  - 게임개발
  - Defold
  - 루아
date: 2024-02-16T12:20:00
---
---

Defold는 캔디 크러쉬 사가 개발사인 King가 무료로 공개한 2D 게임 엔진이다.
루아를 스크립팅 언어를 사용하고 있고 매우 가벼운것이 특징이다. 또한 완전한
크로스 플랫폼을 지원하며 PC, 모바일, PS5부터 스위치까지 모든 플랫폼을 지원한다고 할 수 있다.

```lua
function init(self)
  -- 초기화 함수이다.
end

function final(self)
  -- 컴포넌트가 삭제될떄 실행되는 함수이다.
end

function update(self, dt)
  -- 각 프레임마다 한 번씩 호출한다. dt는 마지막 프레임 이후의 델타 시간을 포함한다.
end

function fixed_update(self, dt)
  -- 독립적인 업데이트. dt는 마지막 업데이트 이후 델타 시간을 포함한다. 
end

function on_message(self, message_id, message, sender)
  -- msg.post()가 보내는 메세지를 받는다.
end

function on_input(self, action_id, action)
  -- 컴포넌트가 보내는 입력에 반응한다.
end

function on_reload(self)
  -- 핫 리로드를 하면 작동한다. 디버깅이나 테스트할 때 유용하다.
end
```


