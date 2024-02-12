---
title: Singleton Pattern
tags:
  - 디자인패턴
date: 2023-11-19
---
---

> 객체의 인스턴스가 오직 1개만 생성

```python
class Singleton(object):
	def __new__(cls, *args, **kwargs):
		if not hasattr(cls, "_intance"):
			cls._intance = super().__new__(cls)
		return cls._instance

	def __init__(self, data):
		cls = type(self)
		if not hasattr(cls, "_init"):
			self.data = data
			cls._init = True


s1 = Singleton()
s2 = Singleton()
print(s1)
print(s2)
```


#### 장점:

메모리

인스턴스가 한개만 존재하는 것을 보증

#### 단점: 

테스트 어려움

의존성 높아짐


