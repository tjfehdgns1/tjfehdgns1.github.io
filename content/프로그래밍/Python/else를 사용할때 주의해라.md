---
title: 반복문 뒤에 else
tags: 파이썬
date: 2023-11-18
---
---

>파이썬은  for나 while 블록 뒤에 else가 올 수 있다.
>하지만 else는 루프중 break가 발생하지 않을 경우에 루프가 끝나고 실행이된다.
>이는 직관적이지 않고 혼동을 야기한다


```python
for i in range(1):
	print(f'{i}')
else:
	print('end')
	# 0
	# end


for i in range(2):
	print(f'{i}')
	if i == 1:
		break
else:
	print('broke')
	# 0
	# 1 'broke'는 출력되진 않음


for i in []:
	print('출력 안됨')
else:
	print('empty')
	# empty

# 이렇게 직관적이지 않아 차라리 도움이 함수를 사용해라

def foo(a, b, n):
	for i in range(n):
		if a % i == 0 and b % i == 0:
			return True
	return False
print(foo(x, y, n))

```

---
##### 참고자료 : 
- [[도움이 함수]]