---
title: hx-target
tags:
  - HTMX
  - 자바스크립트
date: 2023-12-26T17:42:00
---
---

`hx-target`속성은 AJAX의 요청에 해당하는 것뿐만 아니라 다른 요소를 타겟해 swap할 수 있다.

- CSS 선택자
- `this` 자기 자신
- `closest <CSS 선택자>` 가장 가까운 부모 요소 (ex: `closest tr`)
- `find <CSS 선택자>` 하위 자식 요소중 첫번째
- `next` -> `element.nextElementSibling`
- `next <CSS 선택자>` 형제요소
- `previous` -> `element.previousElementSibling`
- `previou <CSS 선택자>` 형제요소

```html
<div>
    <div id="response-div"></div>
    <button hx-post="/register"
    hx-target="#response-div" 
    hx-swap="beforeend">
        Register!
    </button>
</div>
```

`response-div`에 해당하는 `<div>`가 끝나기 전에 응답에 따른 url이 post된다.

```html
<a hx-post="/new-link" hx-target="this" hx-swap="outerHTML">New Link</a>
```

위 예제는 `this`를 사용해서 자기 자신을 업데이트한다.


---

#### 노트

- `hx-target`은 상속되며 부모요소에 배치될 수 있다.

---


- [</> htmx ~ hx-target Attribute](https://htmx.org/attributes/hx-target/)


