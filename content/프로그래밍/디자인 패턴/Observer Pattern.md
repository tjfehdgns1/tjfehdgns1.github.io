---
title: Observer Pattern
tags:
  - 디자인패턴
date: 2023-12-26T00:00:00
---
---

```python
class Channel:
	def __init__(self, name):
		self.name = name
		self.subscribers = []

	def subscribe(self, sub):
		self.subscribers.append(sub)

	def notify(self, event):
		for sub in self.subscribers:
			sub.send_notification(self.name, event)

from abc import ABC, abstractmethod


class Subscriber(ABC):
	@abstractmethod
	def send_notification(self, event):
		pass

class User(Subscriber):
	def __init__(self, name):
		self.name = name

#! 확인
	def send_notification(self, channel, event):
		print(f"{self.name} recieved notification from {channel}.{event}")


channel = Channel("Seol")
channel.subscribe(User("user1"))
channel.subscribe(User("user2"))
channel.subscribe(User("user3"))

channel.notify("New video released. Check it out!")
```















