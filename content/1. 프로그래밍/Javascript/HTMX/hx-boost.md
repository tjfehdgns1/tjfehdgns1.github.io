---
title: hx-boost
tags:
  - HTMX
  - 자바스크립트
date: 2023-12-27T10:34:00
---
---

`hx-boost`속성은 앵커와 폼 태그에게 AJAX를 사용을 부추긴다. 이것은 좋은 부작용이 있다, 만약 유저가 자바스크립트가 없어도 사이트가 동작할 것이다.

타겟은 `<body>`이고 `innerHTML`을 swap한다.

```html
<div hx-boost="true">
  <a href="/page1">Go To Page 1</a>
  <a href="/page2">Go To Page 2</a>
</div>
```

```html
<form hx-boost="true" action="/example" method="post">
    <input name="email" type="email" placeholder="Enter email...">
    <button>Submit</button>
</form>
```



---

#### 노트

- `hx-boost`는 상속되며 부모요소에 넣을 수 있다.
- 오직 같은 도메인 링크이거나 로컬 앵커가 아닌 링크들만 부스트 될것이다.
- 모든 요청이 AJAX에 의해 되으로 redircts와 같은 것을 할 경우에 주의해라.
- 만약 요청이 부스팅된 앵커이거나 폼인지 알고 싶으면, 요청헤더에 `HX-Boosted`를 찾아봐라
- 선택적 부스팅 취소는 `hx-boost="false"`이다.

오래된 사이트에 hx-boost를 넣어 향상 시킬수도 있고 자바스크립트가 없는 환경에서 더 좋은 유저 경험을 위해 넣을 수도 있다.

---

- [HTMX - hx-boost Attribute for Progressively Enhancing Web-Apps (youtube.com)](https://www.youtube.com/watch?v=bzu66N4uBvc)
- [</> htmx ~ hx-boost Attribute](https://htmx.org/attributes/hx-boost/)