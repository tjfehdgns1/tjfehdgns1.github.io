---
title: hx-put
tags:
  - HTMX
  - 자바스크립트
date: 2023-12-27T11:27:00
---
---

`hx-put`속성은 `PUT`을 지정된 URL에 발행한다

```html
<button hx-put="/account" hx-target="body">
  Put Money In Your Account
</button>
```

---

#### 노트

- 상속되지 않는다
- `hx-target`을 이용해서 무엇을 swap할지 정할 수 있다
- `hx-swap`을 이용해서 swap전략을 정할 수 있다
- `hx-trigger`을 이용해서 어떠한 이벤트가 요청을 트리거 할지 정할 수 있다

---

- [</> htmx ~ hx-put Attribute](https://htmx.org/attributes/hx-put/)

