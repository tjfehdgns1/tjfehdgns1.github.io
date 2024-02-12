---
title: hx-indicator
tags:
  - HTMX
  - 자바스크립트
date: 2023-12-27T11:44:00
---
---

`hx-indicator`은 

```html
<div>
    <button hx-post="/example" hx-indicator="#spinner">
        Post It!
    </button>
    <img  id="spinner" class="htmx-indicator" src="/img/bars.svg"/>
</div>
```

```css
    .htmx-indicator{
        opacity:0;
        transition: opacity 500ms ease-in;
    }
    .htmx-request .htmx-indicator{
        opacity:1
    }
    .htmx-request.htmx-indicator{
        opacity:1
    }
```

명시적으로 `hx-indicator`를 콜하지 않아도 된다

```html
<button hx-post="/example">
    Post It!
   <img  class="htmx-indicator" src="/img/bars.svg"/>
</button>
```

---

#### 노트

- 상속되며 부모 요소에 넣을 수 있다
- 명시적으로 부제해도, `htmx-request`클래스는 요청을 트리거하는 요소에 더해질 것이다.
- 만약 커스텀 CSS를 넣고 싶은데 `htmx-indicator`를 클래스 이름으로 사용하고 싶으면 `includeIndicatorStyles`를 비활성화해라.

```html
<meta name="htmx-config" content='{"includeIndicatorStyles": false}'>
```
---

- [</> htmx ~ hx-indicator Attribute](https://htmx.org/attributes/hx-indicator/)