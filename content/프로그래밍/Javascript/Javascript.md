---
title: Javascript
tags:
  - 자바스크립트
date: 2024-01-23T19:02:00
---
---

## 자바스크립트

자바스크립트는 브라우저에서 HTML과 CSS를 단순히 랜더링하는 언어였지만 AJAX, jQuery, V8 자바스크립트 엔진, Node js 등의 등장으로 성능이 많이 상향되었고SPA 프레임워크인 React, Vue, Angular등의 등장으로 웹과 애플리케이션과 비교해도 손색이 없을 정도로 발전했다.

- `Ajax`: 서버와 브라우전간 비동기 방식으로 테이터를 교환하여 전체를 다시 랜더링하는 방식이 아닌 필요한 부분만 랜더링한다.
- `jQuery`: DOM을 더욱더 쉽게 제어가 가능하도록한 라이브러리이다.
- `V8 자바스크립트 엔진`: 자바스크립트 엔진의 발전으로 웹서버에서의 많은 로직들이 클라이언트로 이동했다
- `Node js`: 브라우저에서 자바스크립트 엔진을 분리하여 자바스크립트가 실행할 수 있도록 한다. 또한 비동기 I/O를 지원하여 단일 스레드 이벤트 루프 기반으로 동작한다. 노드의 등장으로 다른 플랫폼에서도 동작이 가능해졌다. 노드같은 경우에는 웹 API가 없고 ECMAScript에 다른 API를 추가했다.

자바스크립트는 빼대인 ECMAScript에 브라우저에서 지원하는 API등을 아우르는 개념이다. 그리고 자바스크립트는 **인터프리터 언어**여서 코드를 런타임에 문 단위로 바이트코드로 변환 후 실행한다.

자바스크립트는 멀티 패러다임 프로그래밍 언어이고 **함수형**, **프로토타입 기반 객체지향** 프로그래밍을 지향한다.

## 변수

*자바스크립트에서 변수는 어떠한 값을 저장하기 위해 확보한 메모리 공간 자체 또는 그 메모리 공간을 식별하기 위한 이름이다.*

자바스크립트는 변수를 선언하면 암묵적으로 `undefined`가 할당된다

```javascript
let variable; // undefined
```

변수는 선언되면 런타임이 아니라 그 이전 단계에서 먼저 실행이 된다. 따라서 마치 변수 선언문이 코드이 선두로 끌어 올리것처럼 동작하는데 이를 변수 **호이스팅**이라고 한다.

> 호이스팅된 변수를 `undefined`로 암묵적으로 할당되고 undefined로 저장된 메모리 공간에 다시 초기화하지 않고 다른 공간을 확보하고 초기화한다.

## 표현식과 문

- 값: 표현식이 평가되어 생성된 결과, 즉 변수에 할당되는 것
- 리터럴: 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해 값을 생성하는 표기법

```javascript
100 // 정수 리터럴
'Hello World' // 문자열 리터럴
true // 불리언 리터럴
{ name: 'Seol', country: 'Korea' } // 객체 리터럴
[1, 2, 3] // 배열 리터럴
function () {} // 함수 리터럴 등등
```

- 표현식: 값으로 평가될 수 있는 문, 즉 새로운 값을 생성하거나 기존값을 참조한다.

```javascript
let score = 50 = 50; // 100

score; // 100
```

- 문: 프로그램을 구성하는 기본 단위이자 최소 실행 단위. 

## 데이터 타입

데이터 타입은 **원시 타입**과 **객체 타입**이 있다.

원시: `Number`, `String`, `Boolean`, `undefined`, `null`, `Symbol`
객체: 객체, 함수, 배열 등

- 숫자 타입: 다른 언어와 다르게 오직 하나의 숫자 타입을 제공한다.
- 문자열 타입: 보통 작은 따음표를 사용하여 표현하고 불변값이며 인덱싱이 불가능하다. 백틱을 사용하면 표현식을 삽입할 수 있다.

```javascript
let name = 'Seol';
let age = 24;

console.log(`My name is ${name} and I'm ${age}.`);
```

- 불리언 타입: `true`, `false`
- undefined 타입: `undefined`밖에 없다
- null 타입: null값은 의도적으로 부재를 명시할때 사용한다
- 심벌 타입: 변경 불가능한 값이고 주로 충돌할 위험이 없는 객체의 유일한 프로퍼티 키를 만들때 사용한다

```javascript
let key = Symbol('key');

let obj = {};

obj[key] = 'value'
console.log(obj[key]); // 'value'
```

- 객체 타입: 자바스크립트는 객체기반 언어이며, 자바스크립트를 이루는 모든것이 객체이다.

데이터 타입이 필요한 이유는 메모리에 값이 저장될때는 이진수로 저장되는데 테이터 타입은 값을 저장할때 얼마나 많은 크기의 메모리 공간을 할당할지, 값을 참조할 때 한번에 읽어야할 메모리 공간의 크기는 얼마인지, 메모리 공간에 있던 이진수를 읽을 때 어떻게 해석할지 쓰인다.

자바스크립트는 동적 타입 언어여서 변수를 선언할때 타입이 정해지지않고 할당이 될때마다 결정된다.

## 연산자

- 산술 연산자: `+ - * / %`, `++ -- + -`, 문자열 연산자 `+`는 피연산자가 하나이상이라도 문자열이면 암묵적으로 타입 변환을 한다
- 할당 연산자: `= += -= *= /= %=`
- 비교 연산자: `== === != !==`, `==`연산자는 암묵적 타입 변환을 통해 타입을 일치시킨 후 값을 비교한다. `< > >= <=`
- 삼항 조건 연산자: `<조건식> ? <참> : <거짓>`
- 논리 연산자: `|| && !`
- 쉼표 연산자: `let x, y, z;`
- 그룹 연산자: `10 * (1 + 2)`
- typeof 연산자: `typeof 1 // number`
- 지수 연산자: `**`

연산자에는 우선순위가 있다. 하지만 그것을 기억하는것은 어려움으로 그룹 연산자를 사용하자.

## 제어문

### if, else

```javascript
let x = 1;
if (x == 1) {
	console.log("x is 1");
} else {
	console.log("Nope");
}
```

### switch

```javascript
let x = 1;
switch (x) {
	case 1:
		console.log("x is 1");
	case 2:
		console.log("x is 2");
	default:
		console.log("I don't know");
}
```

### for

```javascript
for (let i = 0; i < 10; i++) {
	console.log(i);
}
```

### while

```javascript
let count = 0;
while (count < 10) {
	console.log(count);
	count++;
}
```

### do while

```javascript
let count = 0;
while (true) {
	console.log(count);
	count++;
	if (count === 9) {
		break;	
	}
}
```

## 타입 변환과 단축 평가

### 타입 변환

타입 변환은 의도적인 **명시적 타입 변환(explicit coercion)**, 또는 **타입 캐스팅(type casting)** 과 암묵적인 **암묵적 타입 변환(implitcit coercion)**, 또는 **타입 강제 변환(type coercion)** 이있다.

자바스크립트는 암묵적 타입 변환을 할때 값을 다른 타입으로 재할당하지 않고 새로운 타입의 값을 만들어내 한번 사용하고 버린다.

자바스크립트는 불리언 타입이 아닌 값을 Truthy 또는 Falsy값으로 구분한다.

명시적으로 타입을 변환할때는 표준 built-in 생성자 함수를 쓰거나 prototype api를 사용하여 바꿀수 있다.

```javascript
String(1);
(1).tostring();
```

### 단축 평가

> 단축 평가란 표현식을 평가하는 도중에 평가 결과가 확정된 경우 나머지 평가 과정을 생략하는 것이다.

`true || anything -> true`

```javascript
let element = null;

let value = element?.value;
console.log(value); // undefined
```

```javascript
let foo = null ?? 'default string';
console.log(foo); // "default string"
```

## 객체 리터럴

자바스크립트에서 원시 값을 제외한 모든 것이 객체이다. 객체는 변경 가능한 값이며 다양한 값을 하나의 단위로 구성한 복합적인 자료구조이다.

자바스크립트에서 모든 값은 프로퍼티 값이 될 수 있다.

자바스크립트에서 객체를 생성하는 가장 간단한 방법은 객체 리터럴을 통한 방법이다

```javascript
let obj = {
	name: "object",
	doSomething: function () {
		console.log("Hi");
	},
	"string": "any string"
};

obj.name; // "object"
obj["string"];

obj.dynamic = "something";

delete obj.dynamic;
```

프로퍼티 값이 함수일 경우 메서드라고 칭한다.

프로퍼티는 동적으로 생성이 가능하다.

## 원시 값과 객체의 비교

### 원시 값

- 변경 불가능한 값: 값이 불가능하다는 것은 재할당이 불가능하다는 것이 아니고 변수에 저장된 데이터로서 **표현식이 평가되어 생성된 결과가 변경이 불가능**하다는 것이다. 상수와는 의미가 다르다.

> 문자열은 원시값인데 배열처럼 인덱스를 통해 각 문자에 접근할 수 있다. 이는 원시값을 감싸는 래퍼 객체로 자동으로 변환되기 때문이다.


```javascript
let str = 'string';

str[0] = 'S';

console.log(str); // "string"
```

문자열은 읽기 전용 값이라서 변경이 불가능하지만 위처럼 인덱스로 접근해 할당을 할때 에러가 발생하지 않는다. 조심하자!

- 값에 의한 전달: 엄밀히 말해면 자바스크립트는 값이 아니라 메모리 주소를 전달하지만 전달되는 메모리 주소를 통해 값을 얻을 수 있다. 그리고 변수에 재할당을 하면 새로운 윈시값을 가르킴으로 서로 간섭할 수 없게 된다.

```javascript
let a = 100;
let b = a;

console.log(a === b); // true

b = 200;

console.log(a === b); // false
```

### 객체

자바스크립트는 다른 언어들과 다르게 클래스 없이도 객체를 생성할 수 있고 객체가 생성된 이후에도 동적으로 프로퍼티와 메서드를 추가할 수 있다.

- 변경 가능한 값: 객체를 할당한 변수는 재할당 없이 객체를 직접 변경 가능하다.

> 얕은 복사와 깊은 복사: 객체를 복사하면 원본과 복사본과는 다른 객체이다. 얕은 복사는 객체에 중첩되어 있는 객체의 경우 참조 값을 복사하고 깊은 복사는 객체에 중첩되어 있는 객체까지 모두 복사한다.

- 참조에 의한 전달: 자바스크립트에서 객체에 할당한 변수가 기억하는 메모리 주소를 통해 메모리 공간에 접근하면 **참조 값**에 접근할 수 있다. 참조 값은 **생성된 객체가 저장된 메모리 공간의 주소**, 그 자체이다. 객체를 할당하면 참조 값이 복사되어 전달된다. 이것은 두개의 식별자가 하나의 객체를 공유하는 것이다. 즉 서로 영향을 주고 받는다.

```javascript
let something = {
	name: "seol"
};

let copy = something;

console.log(something === copy); // true

something.name = "new name";
copy.age = 24;

console.log(copy.name); // "new name"
console.log(something.age); // 24
```

자바스크립트에는 참조에 의한 전달은 엄밀히 말하면 존재하지 않는다. 다만 식별자가 기억하는 메모리 공간에 저장되어 있는 값이 참조값이여서 참조에 의한 전달이라 표현하는 것이다.

## 함수

함수는 객체이다. 하지만 일반 객체와는 다르다. 일반 객체는 호출할 수 없지만 함수는 호출이 가능하다. 또한 일반 객체에는 없는 함수 객체만의 고요한 프로퍼티를 갔는다.

함수는 4가지 방법으로 정의할 수 있다. **함수 선언문**, **함수 표현식**, **생성자 함수**, **화살표 함수**.

```javascript
function add(x, y) {
	return x + y
}

let add = function (x, y) {
	return x + y
};

let add = new Function('x', 'y', 'return x + y');

let add = (x, y) => x + y;
```

```javascript
console.log(add(1, 3)); // 4
console.log(sub(1, 3)); // TypeError: sub is not a function

function add(x, y) {
	return x + y
}

let sub = function (x, y) {
	return x - y
}
```

함수 선언문과 함수 표현식은 함수의 생성 시점이 다르다. 모든 선언문은 런타임 이전에 자바스크립트 엔진에 의해 먼저 실행된다. 따라서 함수 선언문은 호이스팅된다. 함수와 변수의 호이스팅은 약간 다르다. 반면 함수 표현식은 변수에 할당되는 값이 함수 리터럴이다. 따라서 함수 표현식의 식별자는 undefined로 호이스팅 되지만 함수 리터럴은 런타임에 평가되므로 실행되는 시점에 객체가 만들어진다. 즉 **함수 표현식은 변수 호이스팅만 되는 것이다.**

Function 생성자에 의해 생성된 함수는 다른 함수 객체들과는 다른 점이 있다. 클로저를 생성하지 않는 등, 일반적이지 않으며 바람직하지 않다.

화살표 함수는 익명 함수로 정의하며 생성자 함수로 사용할 수 없고 기존 함수와 this 바인딩 방식이 다르고 prototype 프로퍼티가 없으며 arguments 객체를 생성하지 않는다.

**arguments 객체는 함수의 인수를 보관한다.** 초과된 인수는 버려지지 않고 보관된다.

또한 인수는 기본값을 설정할 수 있다.

매개변수도 원시값은 값에 의한 전달, 객체는 참조에 의한 전달 방식을 따른다.

```javascript
function changeValue(primitive, obj) {
	primitive += 100;
	obj.name = "Seol";
}

let num = 100;
let person = {name: "Lee"};

changeValue(num, person);

console.log(num); // 100
console.log(person); // {name: "Seol"}
```

**중첩 함수**

```javascript
function outer() {
	let x = 1;

	function inner() {
		let y = 2;
		console.log(x + y);
	}
	inner();
}
outer();
```

**콜백 함수**: 다른 함수의 내부로 전달되는 콜백 함수와 외부에서 콜백 함수를 전달 받는 고차 함수로 이루어 진다.

```javascript
function repeat(n, func) {
	for (let i = 0; i < n; i++) {
		func(i);
	}
}

let logNum = function (num) {
	console.log(num);
};

repeat(5, logNum);

let logOdd = function (num) {
	if (num % 2) {
		console.log(num);
	}
};

repeat(5, logOdd);
```

## 스코프



## 전역 변수의 문제점



## 블록 레벨 스코프



## 일급 객체



## 프로토타입



## 빌트인 객체



## this



## 실행 컨텍스트



## 클로저



## 클래스



## 화살표 함수



## 배열



## Number



## Math



## Date




## RegExp



## String



## Symbol



## 이터러블



## 스프레드 문법



## 디스트럭처링 할당



## Set & Map



## 블라우저 렌더링



## DOM




## 이벤트



## 타이머



## 비동기 프로그래밍



## Ajax



## Rest API 



## 프로미스



## 제너레이터



## 에러 처리




## 모듈



---

## 참고자료

- 모던 자바스크립트 Deep Dive