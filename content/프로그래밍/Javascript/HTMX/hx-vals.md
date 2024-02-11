---
title: hx-vals
tags:
  - HTMX
date: 2024-01-02T11:53:00
---
---

> `hx-vals`는 AJAX 요청에 매개변수를 추가할 수 있다. 기본적으로 속성의 값은 JSON포맷이다. 또한 `js`를 붙이면 자바스크립트를 사용할 수 있다.

```html
<div hx-get="/example" hx-vals='{"myVal": "My Value"}'>
  Get Some HTML, Including A Value in the Request
</div>

<div hx-get="/example" hx-vals='js:{myVal: calculateValue()}'>
  Get Some HTML, Including a Dynamic Value from Javascript in the    Request
</div>
```


#### 보안

- 기본적으로 `hx-vals`는 JSON를 사용한다. 그리고 그것은 동적으로 컴퓨팅되지 않는다. 만약 자바스크립트를 쓴다면 사용자의 입력(쿼리 스트링, 유저가 만든 컨텐츠)를 다룰때에는 **Cross-Site Scripting(XSS)** 를 주의 해야한다.


## 노트

- 상속되면 부모 요소에 넣을 수 있다.
- 자식에서의 선언이 부모에서의 선언을 오버라이딩한다.
- 변수 선언과 같은 이름을 가진 입력값은 오버라이딩될 것이다.

---

- [</> htmx ~ hx-vals Attribute](https://htmx.org/attributes/hx-vals/)

