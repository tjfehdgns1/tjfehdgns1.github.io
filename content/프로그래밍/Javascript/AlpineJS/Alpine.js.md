---
title: Alpine.js
tags:
  - 자바스크립트
date: 2023-12-31T12:23:00
---
---

> Alpine.js는 자바스크립트 라이브러리로 HTML Driven Development 방식의 개발을 위한 인라인 개발을 지원한다. 18개의 attributes, 9개의 properties, 그리고 3개의 메소드를 가지고 있으며 매우 간단하고, 가볍다.

```html
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.13.3/dist/cdn.min.js"></script>
```

## [[Directives|Attributes(Directive)]]

#### x-data:

> Alpine의 모든 시작점은 `x-data`이다. 
> `x-data`는 HTML의 반응형 데이터를 만든다.

```html
<div x-data="{foo: 'bar'}">
  <span x-text="foo"><!-- "bar" --></span>
  <div x-data="{foo: 'bob'}">
    <span x-text="foo"><!-- "bob" --></span>
  </div>
</div>
```

- [data — Alpine.js (alpinejs.dev)](https://alpinejs.dev/directives/data)


#### x-bind:

> `x-bind`는 HTML의 속성들을 자바스크립트의 요소들로 바꾼다.
> 

```html
<div x-data="{ placeholder: 'Type here...' }">
  <input type="text" x-bind:placeholder="placeholder">
</div>
```

```html
<div x-data="{ placeholder: 'Type here...' }">
  <input type="text" :placeholder="placeholder">
</div>
```

- [bind — Alpine.js (alpinejs.dev)](https://alpinejs.dev/directives/bind)

#### x-on:

> `x-on`을 사용하면 전달된 DOM 이벤트에소 코드를 쉽게 실행 가능하다.

```html
<button x-on:click="alert('Hello World!')">Say Hi</button>
```

```html
<button @click="alert('Hello World!')">Say Hi</button>
```

- [on — Alpine.js (alpinejs.dev)](https://alpinejs.dev/directives/on)

#### x-text:

> `x-text`는 텍스트 컨텐츠를 주어진 결과에 따라 보여준다.

```html
<div x-data="{ username: 'calebporzio' }">
  Username: <strong x-text="username"></strong>
</div>
```

- [text — Alpine.js (alpinejs.dev)](https://alpinejs.dev/directives/text)

#### x-html:

> `x-html`은 innerHTML를 주어진 결과에 따라 보여준다.

```html
<div x-data="{ username: '<strong>calebporzio</strong>' }">
  Username: <span x-html="username"></span>
</div>
```

- [html — Alpine.js (alpinejs.dev)](https://alpinejs.dev/directives/html)

#### x-model:

> `x-model`은 input에 대한 값을 `x-data`에 저장을 한다.

```html
<div x-data="{ message: '' }">
  <input type="text" x-model="message">
  <span x-text="message">
</div>
```

- [model — Alpine.js (alpinejs.dev)](https://alpinejs.dev/directives/model)

#### x-show:

> `x-show`는 Alpine에서 가장 유용한것 중에 하나이다. 이것은 DOM요소를 숨기고 보여주는데 매우 효과적이다.

```html
<div x-data="{ open: false }">
  <button x-on:click="open = ! open">Toggle Dropdown</button>
  <div x-show="open">
    Dropdown Contents...
  </div>
</div>
```

- [show — Alpine.js (alpinejs.dev)](https://alpinejs.dev/directives/show)

#### x-transition:

> `x-transition`을 이용하면 간단한 애니메이션을 만들수가 있다. TailwindCSS를 이용하여 조종할 수도 있다.

```html
<div x-data="{ open: false }">
  <button @click="open = ! open">Toggle</button>
  <span x-show="open" x-transition>
    Hello 👋
  </span>
</div>
```

```html
<div x-data="{ open: false }">
  <button @click="open = ! open">Toggle</button>
  <div
    x-show="open"
	x-transition:enter="transition ease-out duration-300"
	x-transition:enter-start="opacity-0 scale-90"
	x-transition:enter-end="opacity-100 scale-100"
	x-transition:leave="transition ease-in duration-300"
	x-transition:leave-start="opacity-100 scale-100"
	x-transition:leave-end="opacity-0 scale-90"
  >
    Hello 👋
  </div>
</div>
```

- [transition — Alpine.js (alpinejs.dev)](https://alpinejs.dev/directives/transition)

#### x-for:

> `x-for`은 DOM요소가 이터럴 할 수 있게 해준다. 그리고 `x-for`은 무조건 `template`태그 안에 하나의 요소만 선언 가능하다.

```html
<ul x-data="{ colors: ['Red', 'Orange', 'Yellow'] }">
  <template x-for="color in colors">
	<li x-text="color"></li>
  </template>
</ul>
```

- [for — Alpine.js (alpinejs.dev)](https://alpinejs.dev/directives/for)

#### x-if:

> `x-if`는 `x-show`와 비슷한 역활을 하지만 CSS를 바꾸는 것과는 다르게 요소를 제거 하거나 추가한다. 또한 `template`태그 안에 하나의 요소만 선언 가능하고 `x-transition`은 사용이 불가능하다.

```html
<template x-if="open">
  <div>Contents...</div>
</template>
```

- [if — Alpine.js (alpinejs.dev)](https://alpinejs.dev/directives/if)

#### x-init:

> 생성자이고 다양하게 활용가능


```html
<div x-init="console.log('I\'m being initialized!')"></div>
```

- [init — Alpine.js (alpinejs.dev)](https://alpinejs.dev/directives/init)

#### x-effect:

> `x-effect`는 의존성중 하나가 바뀔때 어떻게 바뀌는지 볼 수 있다.


```html
<div x-data="{ label: 'Hello' }" x-effect="console.log(label)">
  <button @click="label += ' World!'">Change Message</button>
</div>
```

- [effect — Alpine.js (alpinejs.dev)](https://alpinejs.dev/directives/effect)

#### x-ref:

> `x-ref`는 `$ref`와 같이 쓰이며 `getElementById`, `querySelector`와 같은것을 대체한다.


```html
<button @click="$refs.text.remove()">Remove Text</button>
<span x-ref="text">Hello 👋</span>
```

- [ref — Alpine.js (alpinejs.dev)](https://alpinejs.dev/directives/ref)

#### x-cloak:

> Alpine.js를 사용하다보면 페이지가 로드된 후 Alpine이 로드되기 전에 초기화되지 않은 템플릿을 볼 때 깜빡거리는 현상이 있을때 사용한다.

```html
<style>
  [x-cloak] {
  display: none !important;
  }
</style>

<span x-cloak x-show="false">
  This will not 'blip' onto screen ay any point
</span>
```

- [cloak — Alpine.js (alpinejs.dev)](https://alpinejs.dev/directives/cloak)

#### x-ignore:

> `x-init`, `x-data`를 가지고 있는 요소중 Alpine을 사용하고 싶지 않다면 사용한다.

```html
<div x-data="{label: 'From Alpine'}">
  <div x-ignore>
    <span x-text="label"></span>
  </div>
</div>
```

- [ignore — Alpine.js (alpinejs.dev)](https://alpinejs.dev/directives/ignore)

#### x-id:

```html
<div x-id="['text-input']">
    <label :for="$id('text-input')">Username</label>
    <!-- for="text-input-1" -->
    <input type="text" :id="$id('text-input')">
    <!-- id="text-input-1" -->
</div>
 
<div x-id="['text-input']">
    <label :for="$id('text-input')">Username</label>
    <!-- for="text-input-2" -->
    <input type="text" :id="$id('text-input')">
    <!-- id="text-input-2" -->
</div>
```

- [id — Alpine.js (alpinejs.dev)](https://alpinejs.dev/directives/id)

#### x-teleport:

> `x-teleport`는 Alpine 템플릿을 DOM의 다른 부분으로 페이지 전체를 옮긴다.

```html
<body>
  <div x-data="{ open: false }">
    <button @click="open = ! open">Toggle Modal</button>
      <template x-teleport="body">
        <div x-show="open">
          Modal contents...
        </div>
      </template>
    </div>

  <div>Some other content placed AFTER the modal markup.</div>
    ...
</body>
```

- [teleport — Alpine.js (alpinejs.dev)](https://alpinejs.dev/directives/teleport)

#### x-modelable:

> `x-modelable`을 사용하면 Alpine 속성을 `x-model`의 대상으로 노출시킬 수 있다.

```html
<div x-data="{ number: 5 }">
  <div x-data="{ count: 0 }" x-modelable="count" x-model="number">
    <button @click="count++">Increment</button>
  </div>
   
  Number: <span x-text="number"></span>
</div>
```

- [modelable — Alpine.js (alpinejs.dev)](https://alpinejs.dev/directives/modelable)

---

## [[Magics|Properties(Magics)]]

#### $store:

> `$store`을 사용하면 [[#Alpine.store]]를 사용하여 글로벌 stores에 편리하게 접근 가능하다.

```html
<button x-data @click="$store.darkMode.toggle()">
  Toggle Dark Mode
</button>

<div x-date :class="$store.darkMode.on && 'bg-black'">
  <!-- ... -->
</div>

<script>
  document.addEventListener('alpine:init', () => {
    Alpine.store('darkMode', {
      on: false,
      
      toogle() {
        this.on  = !this.on
      }
    }) 
  })
</script>
```

- [store — Alpine.js (alpinejs.dev)](https://alpinejs.dev/magics/store)

#### $el:

> `$el`은 현재의 DOM노드를 조종할 수 있다.


```html
<button @click="$el.innerHTML = 'Hello World!'">
  Replace me with "Hello World!"
</button>
```

- [el — Alpine.js (alpinejs.dev)](https://alpinejs.dev/magics/el)

#### $dispatch:

> `$dispatch`는 브라우저의 이벤트를 전달하는 유용한 숏컷이다.

```html
<div @notify="alert($event.detail.message)">
  <button @click="$dispatch('notify', { message: 'Hello World!' })">
    Notify
  </button>
</div>
```

- `$dispatch`는 `element.dispatchEvent(new CustomEvent())`의 wrapper이다.

```html
<!-- 🚫 Won't work -->
<div x-data>
  <span @notify="..."></span>
  <button @click="$dispatch('notify')">Notify</button>
</div>

<!-- ✅ Will work (because of .window) -->
<div x-data>
  <span @notify.window="..."></span>
  <button @click="$dispatch('notify')">Notify</button>
</div>
```

- `custom-event`를 사용할 경우, 형제대신 조상의 요소를 보기 때문에 `.window`를 추가해줘야 형제의 요소를 볼 수 있다.

- [dispatch — Alpine.js (alpinejs.dev)](https://alpinejs.dev/magics/dispatch)

#### $watch:

> `$watch`를 사용하면 컴포넌트의 속성을 볼 수 있다.

```html
<div x-data="{ foo: { bar: 'baz' }}" 
	 x-init="$watch('foo.bar', value => console.log(value))">
    <button @click="foo.bar = 'bob'">Toggle Open</button>
</div>
```

- `button`를 누르면 `foo.bar`은 "bob"으로 바뀌고 콘솔에 "bob"이 출력된다.

```html
<div x-data="{ open: false }" 
	 x-init="$watch('open', (value, oldValue) => 
	 console.log(value, oldValue))">
    <button @click="open = ! open">Toggle Open</button>
</div>
```

- `oldValue`를 사용하면 전 값을 추적할 수 있다.

- [watch — Alpine.js (alpinejs.dev)](https://alpinejs.dev/magics/watch)

#### $refs:

> `$refs`는 `x-ref`으로 연결된 컴포넌트를 검색해 조작할 수 있다. `document.querySelector`보다 간결하고 범위가 지정된 대안으로 사용된다.

```html
<button @click="$refs.text.remove()">Remove Text</button>
<span x-ref="text">Hello 👋</span>
```

- [refs — Alpine.js (alpinejs.dev)](https://alpinejs.dev/magics/refs)

#### $nextTick:

> `$nextTick`은 DOM이 업데이트된 후에 어떠한 작업을 수행하고 싶을때 사용한다.


```html
<div x-data="{ title: 'Hello' }">
  <button
	@click="
	  title = 'Hello World!';
	  $nextTick(() => { console.log($el.innerText) });
	"
	x-text="title"
  ></button>
</div>
```

- `$nextTick`은 프로미스를 반환함으로 `$nextTick`를 사용하여 비동기 함수를 DOM이 업데이트 될때까지 정지 시킬수 있다. ( `await` )

- [nextTick — Alpine.js (alpinejs.dev)](https://alpinejs.dev/magics/nextTick)

#### $root:

> `$root`은 DOM 트리에서 `x-data`를 포함한 가장 가까운 루트요소를 찾는다.


```html
<div x-data data-message="Hello World!">
  <button @click="alert($root.dataset.message)">Say Hi</button>
</div>
```

- [root — Alpine.js (alpinejs.dev)](https://alpinejs.dev/magics/root)

#### $data:

> `$data`는 현재 Alpine 데이터의 범위에 접근을 위해 사용된다. 
> 대부분의 경우 `x-data="{message: 'Hello World!}"`는 `x-text="message"`와 같은 방법을 사용하지만 다른 함수에 모든 범위를 캡슐화하는 객체를 전달할때가 필요할 수도 있다.



```html
<div x-data="{ greeting: 'Hello' }">
  <div x-data="{ name: 'Caleb' }">
    <button @click="sayHello($data)">Say Hello</button>
  </div>
</div>
 
<script>
  function sayHello({ greeting, name }) {
    alert(greeting + ' ' + name + '!')
  }
</script>
```

- [data — Alpine.js (alpinejs.dev)](https://alpinejs.dev/magics/data)

#### $id:

> `$id`는 요소의 ID를 생성한다.

```html
<input type="text" :id="$id('text-input')">
<!-- id="text-input-1" -->
<input type="text" :id="$id('text-input')">
<!-- id="text-input-2" -->
```

- `x-id`를 사용해여 더 유연하게 사용가능하다.

```html
<div x-id="['text-input']">
  <label :for="$id('text-input')"> <!-- "text-input-1" -->
  <input type="text" :id="$id('text-input')"> <!-- "text-input-1" -->
</div>

<div x-id="['text-input']">
  <label :for="$id('text-input')"> <!-- "text-input-2" -->
  <input type="text" :id="$id('text-input')"> <!-- "text-input-2" -->
</div>
```


- [id — Alpine.js (alpinejs.dev)](https://alpinejs.dev/magics/id)

---
## [[Globals|Methods(Globals)]]


#### Alpine.data:

```html
<div x-data="dropdown">
  <!-- ... -->
</div>


<script>
  document.addEventListener('alpine:init', () => {
    Alpine.data('dropdown', () => ({
      open: false,

      toggle() {
        this.open = ! this.open
      }
    }))
  })
</script>
```

- [data() — Alpine.js (alpinejs.dev)](https://alpinejs.dev/globals/alpine-data)

#### Alpine.store:

```html
<script>
  document.addEventListener('alpine:init', () => {
    Alpine.store('darkMode', {
      on: false,
      
      toggel() {
        this.on = ! this.on
      }
    })
  })
</script>
```

- [store() — Alpine.js (alpinejs.dev)](https://alpinejs.dev/globals/alpine-store)


#### Alpine.bind:

> `Apline.bind()`를 사용하면 `x-bind` 객체를 재사용가능하게 할 수 있다.

```html
<button x-bind="SomeButton"></button>

<script>
  document.addEventListener('alpine:init', () => {
    Alpine.bind('SomeButton', () => ({
      type: 'button',
      
      '@click'() {
        this.doSomething()
      },
      
      ':disabled'() {
        return this.shouldDisable
      },
    }))
  })
</script>
```

- [bind() — Alpine.js (alpinejs.dev)](https://alpinejs.dev/globals/alpine-bind)

---

- [Alpine.js (alpinejs.dev)](https://alpinejs.dev/)

