---
title: hx-select
tags:
  - HTMX
  - 자바스크립트
date: 2023-12-27T10:04:00
---
---

`hx-select`속성은 swap하고 싶은 컨텐츠를 고를 수 있게 한다. 속성값은 CSS 선택자이다.

```html
<div>
	<button hx-get="/info"
		hx-select="#info-details"
		hx-swap="outerHTML">
		Get Info!
	</button>
</div>
```

위에 버튼은 `Get`을 통해 `/info`에서 가져온 요소를 `info-detail`에 전부 대체 할 것이다.

---

#### 노트

- `hx-select`는 상속되며, 부모 요소에 놓일 수 있다.


---

- [</> htmx ~ hx-select Attribute](https://htmx.org/attributes/hx-select/)
- [HTMX - hx-select and hx-select-oob Attributes in HTMX (youtube.com)](https://www.youtube.com/watch?v=JhskwvJuXF4)

