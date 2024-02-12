---
title: __repr__
tags:
  - 파이썬
date: 2023-11-20
---
---

### `__repr__` 와 `__str__` 의 차이:

```python
class A:
	def __str__(self):
		return 'this is string'

	def __repr__(self):
		return 'this is representation'

>> a = A()
>> str(a) # 1
>> a # 2
>> print(a) # 3

# 1 -> 'this is string'
# 2 -> this is representation
# 3 -> this is string


```

str은 서로 다른 자료형 간에 인터페이스를 제공한다
repr는 사람이 객체를 이해할 수 있도록 표현한다




---
##### 참고자료:
- https://shoark7.github.io/programming/python/difference-between-__repr__-vs-__str__
