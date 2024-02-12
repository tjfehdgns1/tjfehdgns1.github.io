---
title: hx-swap
tags:
  - HTMX
  - 자바스크립트
date: 2023-12-26T18:00:00
---
---

> `hx-swap`속성은 지정한 대상이 어떻게 응답할지 지정할 수 있게 한다. 초기값은 `innerHTML`이다.

- `innerHTML` - 목표 요소의 안쪽 html을 대체한다.
- `outerHTML` - 목표 요소의 바깥쪽 html을 대체한다.
- `beforebegin` - 목표 요소의 시작전에 삽입한다.
- `afterbegin` - 목표 요소의 시작후 자식 요소 시작전에 삽입한다.
- `beforeend` - 목표 요소의 마지막 자식 요소 후 삽입한다.
- `afterend` - 목표 요소가 끝난 후 삽입한다.
- `delete` - 삭제한다.
- `none` - 삽입하지 않는다.


```html
  <div hx-get="/example" 
  hx-swap="afterend">
  Get Some HTML & Append It
  </div>
```

`<div>`뒤에 `/example`요청에 따른 HTML을 넣을 것이다.

---

**수정자**

`hx-swap`속성은 수정자를 지원하며 swap의 행동을 바꿀수 있다.


*Transition*: `transition`

*View Transition* API를 swap이 일어날때 사용할 수 있다. `transition:true`옵션을 사용하면 된다. 또한 세팅을 통해 전역으로 적용되게 할 수 있다. `htmx.config.globalViewTansition` -> true

*Timing*: `swap` & `settle`

```html
<!-- this will wait 1s before doing the swap after it is received -->
<div hx-get="/example" hx-swap="innerHTML swap:1s">
  Get Some HTML & Append It
</div>
```

```html
<!-- this will wait 1s before doing the swap after it is received -->
<div hx-get="/example" hx-swap="innerHTML settle:1s">
  Get Some HTML & Append It
</div>
```

이런한 속성들은 HTMX가 CSS transition에 싱크를 맞출때 사용될 수 있다.

*Title*: `ignoreTitle`

제목을 무시 할 수 있다.

*Scrolling*: `scroll` & `show`

`scroll` 과 `show` 수정자로 스크롤의 행동을 바꿀 수 있다, 그리고 `top`, `bottom`, CSS 선택자, `window` 와 같은 값으로 커스텀이 가능하다

```html
  <!-- this fixed-height div will scroll to the bottom of the div after content is appended -->
  <div style="height:200px; overflow: scroll" 
       hx-get="/example" 
       hx-swap="beforeend scroll:bottom">
     Get Some HTML & Append It & Scroll To Bottom
  </div>
```

```html
  <!-- this will get some content and add it to #another-div, then ensure that the top of #another-div is visible in the 
       viewport -->
  <div hx-get="/example" 
       hx-swap="innerHTML show:top"
       hx-target="#another-div">
    Get Some Content
  </div>
```

```html
  <!-- this will get some content and swap it into the current div, then ensure that the top of #another-div is visible in the 
       viewport -->
  <div hx-get="/example" 
       hx-swap="innerHTML show:#another-div:top">
    Get Some Content
  </div>
```

```html
  <!-- this will get some content and swap it into the current div, then ensure that the viewport is scrolled to the
       very top -->
  <div hx-get="/example" 
       hx-swap="innerHTML show:window:top">
    Get Some Content
  </div>
```

*Focus scroll*: 

htmx는 기본적으로 호출 사이에 포커스된 인풋애 자동-스크롤를 방지한다, 그리고 그것은 긴 호출에선 의도되지 않은 반응일 것이다. 스크롤을 허락하기 위해선 `focus-scroll:true`를 사용해라.

```html
<input id="name" hx-get="/validation" 
       hx-swap="outerHTML focus-scroll:true"/>
```

반면에 기본적인 반응이 자동-스크롤이길을 원하면 `htmx.config.defaultFocusScroll`을 true로 하고 특정 호출만 끈다.

```html
<input id="name" hx-get="/validation" 
       hx-swap="outerHTML focus-scroll:false"/>
```



---

#### 노트

- `hx-swap`은 상속할 수 있다.
- 초기값은 `innerHTML`이다
- DOM에 의한 제한으로, `outerHTML`을 사용해서 `<body>`요소를 대체할 수는 없다.
- swap 딜레이는 0ms이다.
- settle 딜레이는 20ms이다.


---

- [</> htmx ~ hx-swap Attribute](https://htmx.org/attributes/hx-swap/)

