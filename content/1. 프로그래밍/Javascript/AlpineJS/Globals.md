---
title: Globals
tags:
  - HTMX
date: 2024-01-02T21:14:00
---
---


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
