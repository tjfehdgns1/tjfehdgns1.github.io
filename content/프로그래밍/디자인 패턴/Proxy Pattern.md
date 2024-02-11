---
title: Proxy Pattern
tags:
  - 디자인패턴
date: 2023-12-27T15:13:00
---
---

```python
class Subject:
	def request(self):
		pass

class RealSubject(Subject):
	def request(self):
		print("RealSubject requested")

class Proxy(Subject):
	def __init__(self):
		self.real_subject = RealSubject()

	def request(self):
		self.pre_request()
		self.real_subject.request()
		self.post_request()

	def pre_request(self):
		print("Proxy pre requested")

	def post_request(self):
		print("Proxy post requested")

proxy = Proxy()
proxy.request()
```


---

#### 장점:

- 보안

#### 단점:

- 성능
- 디버깅

---

- [[디자인 패턴] 프록시 패턴 (Proxy Pattern) - python 예제 코드 (tistory.com)](https://python101.tistory.com/entry/%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%A8%ED%84%B4-%ED%94%84%EB%A1%9D%EC%8B%9C-%ED%8C%A8%ED%84%B4-Proxy-Pattern-python-%EC%98%88%EC%A0%9C-%EC%BD%94%EB%93%9C)

