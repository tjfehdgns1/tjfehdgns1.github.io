---
title: hx-get
tags:
  - HTMX
  - 자바스크립트
date: 2023-12-26T16:01:00
---
---

`hx-get`속성은 엔드포인트의 HTML을 `get`하여 swap전략을 사용해서 DOM으로 바꾼다.

```html
<div hx-get="/">Get HTML</div>
```

swap전략은 초기값이 `innerHTML`임으로 `<div>`안에 값이 바뀐다.

---

#### 노트

- `hx-get`은 상속되지 않는다.
- `hx-get`은 어떠한 매개변수를 포함하지 않는다. [[hx-params]] 속성을 이용할 수 있다.
- [[hx-target]] 속성을 사용하면 무엇을 swap할 것인지 정할 수 있다.
- [[hx-swap]] 속성을 사용하면 swap전략을 바꿀수 있다.
- [[hx-trigger]] 속성을 사용하면 어떠한 이벤트에 요청을 할지 정할 수 있다.
- 

---

- [</> htmx ~ hx-get Attribute](https://htmx.org/attributes/hx-get/)