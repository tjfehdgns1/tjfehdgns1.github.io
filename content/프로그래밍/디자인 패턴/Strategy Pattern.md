---
title: Strategy Pattern
tags:
  - 디자인패턴
date: 2023-11-19
---
---

> 객체의 행위를 바꾸고 싶은데 직접 수정하지 않는 패턴

```python
from abc import ABC, abstactmethod


class FilterStrategy(ABC):
	@abstactmethod
	def remove_value(self, value):
		pass

class RemoveNegativeStrategy(FilterStrategy):
	def remove_value(self, value):
		return value < 0

class RemoveOddStrategy(FilterStrategy):
	def remove_value(self, value):
		return abs(value) % 2

class Values:
	def __init__(self, values):
		self.values = values

	def filter(self, strategy):
		result = []
		for number in self.values:
			if not strategy.remove_value(number):
				result.append(number)

			return result

values = Values([-2, -7, 2, 0, 4, 10])

print(values.filter(RemoveOddStrategy()))
print(values.filter(RemoveNegativeStrategy()))


```