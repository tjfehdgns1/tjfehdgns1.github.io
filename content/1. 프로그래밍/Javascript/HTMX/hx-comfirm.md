---
title: hx-comfirm
tags:
  - HTMX
date: 2024-01-02T11:49:00
---
---

> `hx-confirm`은 요청을 하기전에 확인하는 행동을 취한다.



```html
<button hx-delete="/account" hx-confirm="Are you sure">
  Delete My Account
</button>
```

추가적인 이벤트에 대한 속성은 아래 참고

- [</> htmx ~ hx-confirm Attribute](https://htmx.org/attributes/hx-confirm/)

---
## 노트:

- 상속한다, 부모요소에 넣을 수 있다.
- 브라우저의 `window.confirm`을 기본적으로 사용한다
- 