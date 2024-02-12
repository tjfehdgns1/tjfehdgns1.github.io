---
title: Iterator Pattern
tags:
  - 디자인패턴
date: 2023-12-27T15:30:00
---
---

```python
class ListNode:
	def __init__(self, value):
		self.value = value
		self.next = None

class LinkedList:
	def __init__(self, head):
		self.head = head
		self.current = None

	def __iter__(self):
		self.current = self.head
		return self

	def __next__(self):
		if self.current:
			value = self.current.value
			self.current = self.current.next
			return value
		else:
			raise StopIteration

head = ListNode(1)
head.next = ListNode(8)
head.next.next = ListNode(4)
list = LinkedList(head)

for l in list:
	print(l)
```