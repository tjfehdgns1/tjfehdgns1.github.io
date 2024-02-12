---
title: Factory Pattern
tags:
  - 디자인패턴
date: 2023-11-19
---
---

클라이언트가 전달한 인자에 따라 클라이언트가 직접 클래스를 호출하지 않고 객체를 생성

```python
from abc import ABCMeta, abstactmethod


class Animal(metaclass = ABCMeta):
	@abstactmethod
	def say_something(self):
		pass

class Cat(Animal):
	def say_something(self):
		print("Meow")

class Dog(Animal):
	def say_something(self):
		print("Bark")

class Factory(object):
	def say(self, object_type):
		return(eval(object_type.capitalize())().say_something())

animals = ["cat", "dog"]
factory = Factory()
for animal in animals:
	factory.say(animal)
```



#### 장점:

클라이언트가 수정할 필요 없이 호출만 하면됨

확장에 편함

생성 해야할 객체가 추가 되어도 객체를 생성하는 부분만 건드리면 됨


#### 단점:

공장에서 무슨 데이터가 들어왔는지 확인해야해서 조건문이 길어질 수가 있다.

-> Animal, Factory를 추상화 해서 공장에 인터페이스를 만들고 오버라이딩을 하면 공장에 조건문을 계속 수정하지 않고 공장을 만들수 있다 (팩토리 메서드 패턴)

-> ...(추상 팩토리 패턴)

---


