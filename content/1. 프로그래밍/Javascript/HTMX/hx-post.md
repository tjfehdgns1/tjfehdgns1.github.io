---
title: hx-post
tags:
  - HTMX
  - 자바스크립트
date: 2023-12-26T17:32:00
---
---

`hx-post`속성은 엔드포인트의 HTML을 `post`하여 swap전략을 사용해서 DOM으로 바꾼다.

```html
<button hx-post="/account/enable" hx-target="body">
	Enable Your account
</button>
```


`button` 은 `/account/enable` 에 `Post`를 하고 `body` 안에 swap한 HTML를 넣는다.

---

#### 노트

- `hx-post`는 상속하지 않는다.
- [[hx-target]] 속성을 사용하면 무엇을 swap할 것인지 정할 수 있다.
- [[hx-swap]] 속성을 사용하면 swap전략을 바꿀수 있다.
- [[hx-trigger]] 속성을 사용하면 어떠한 이벤트에 요청을 할지 정할 수 있다.




---

- [</> htmx ~ hx-post Attribute](https://htmx.org/attributes/hx-post/)


