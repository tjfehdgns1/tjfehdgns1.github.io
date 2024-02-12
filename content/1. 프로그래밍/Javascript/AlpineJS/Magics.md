---
title: Magics
tags:
  - HTMX
date: 2024-01-02T21:12:00
---
---


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