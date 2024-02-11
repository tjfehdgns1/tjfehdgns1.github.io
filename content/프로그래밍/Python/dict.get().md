---
title: dict.get()
tags: 파이썬
date: 2023-11-18
---
---

> dict.get(key, default=None)

```python
my_dict = {'apple': 3, 'banana': 5, 'orange': 2}

# key 'apple'에 해당하는 값을 얻기
apple_count = my_dict.get('apple')
print(apple_count)  # 출력: 3

# key 'grape'에 해당하는 값을 얻기
grape_count = my_dict.get('grape')
print(grape_count)  # 출력: None

# key 'grape'에 해당하는 값을 얻고, 기본값으로 0을 사용
grape_count_with_default = my_dict.get('grape', 0)
print(grape_count_with_default)  # 출력: 0

```
---
##### 참고자료 : 
