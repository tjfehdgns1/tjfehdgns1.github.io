---
title: 파이썬 key sort
tags:
  - 파이썬
date: 2023-11-20
---
---
```python
class Tool:
	def __init__(self, name, weight):
		self.name = name
		self.weight = weight
	def __repr__(self):
		return f'{Tool.name}, {Tool.weight}'

tools = [
		 Tool('A', 1),
		 Tool('C', 4),
		 Tool('D', 2),
		 Tool('Z', 10)		 
]

# 정렬을 할때 다양한 기준으로 정렬을 해야한다면 무엇을 해야할까
# tuple?
tools.sort(key=lambda x:(x.name, x.weight))
# 가장 쉬운 방법이지만 한쪽은 오름차순, 한쪽은 내림차순으로 할려면 힘들다

# 파이썬은 이런 상황을 위해 stable sort 알고리즘을 제공한다
# key 함수가 반환하는 값이 같다면 원래 순서를 반환한다
# 따라서 우리는 sort함수를 여러번 호출해도 된다는 것이다
tool.sort(key=lambda x: x.name)
tool.sort(key=lambda x: x.weight, reverse=True)


```



##### 참고자료:
-
