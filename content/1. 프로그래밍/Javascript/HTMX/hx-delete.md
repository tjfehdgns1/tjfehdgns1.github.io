---
title: hx-delete
tags:
  - HTMX
  - 자바스크립트
date: 2023-12-27T11:31:00
---
---

`hx-delete`속성은 `DELETE`을 지정된 URL에 발행한다

```html
<button hx-delete="/account" hx-target="body">
  Delete Your Account
</button>
```

---

#### 노트

- 상속되지 않는다
- `hx-target`을 이용해서 무엇을 swap할지 정할 수 있다
- `hx-swap`을 이용해서 swap전략을 정할 수 있다
- `hx-trigger`을 이용해서 어떠한 이벤트가 요청을 트리거 할지 정할 수 있다
- 요소를 성공적으로 제거하려면, `200`과 빈 body를 리턴해라. 만약 서버가 `204`로 응답하면 swap하지 말아라.

---

- [</> htmx ~ hx-delete Attribute](https://htmx.org/attributes/hx-delete/)
- [</> htmx ~ Documentation](https://htmx.org/docs/#requests)
