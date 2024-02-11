---
title: hx-trigger
tags:
  - HTMX
  - 자바스크립트
date: 2023-12-27T10:12:00
---
---

`hx-trigger`는 어떠한 AJAX 요청을 할지 정할수 있다.

- 이벤트 이름 (ex: "click")
- `every <timing declaration>`
- comma-sperated list

**이벤트**

```html
<div hx-get="/clicked" hx-trigger="click">Click Me</div>
```

```html
<div hx-get="/clicked" hx-trigger="click[ctrlKey]">
	Control Click Me
</div>
```

```html
<div hx-get="/clicked" hx-trigger="click[checkGlobalState()]">
	Control Click Me
</div>
```

```html
<div hx-get="/clicked" hx-trigger="click[ctrlKey&&shiftKey]">
	Control-Shift Click Me
</div>
```




**이벤트 수정사**

- `once`
- `changed`
- `delay:<timing declaration>`
- `throttle:<timing delclartion>`
- `from:<CSS 선택자>`
- `target:<CSS 선택자>`
- `consume`
- `queue:<queue option>`






---

- [Element - Web APIs | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/API/Element#events)

- [</> htmx ~ hx-trigger Attribute](https://htmx.org/attributes/hx-trigger/)






