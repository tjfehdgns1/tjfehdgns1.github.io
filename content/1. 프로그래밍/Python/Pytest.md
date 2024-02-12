---
title: pytest
tags:
  - 파이썬
date: 2023-11-19
---
---

### Asset
```python
# file.py
def function(x):
    return x + 1

# test_file.py
import file_dir.file as t

def test_function():
	result = t.function(1)
	assert result == 2
```

### Class
```python
# file.py
class Square:
	def __init__(self, length):
		self.length = length

	def width(self):
		return self.length ** 2

# test_file.py
from file_dir.file import Square

class TestSquare:
	def setup_method(self, method):
		print(f"Setting up for {method.__name__}")
		self.square = Square(length=2)

	def teardown_method(self, method):
		print(f"Tearing down after {method.__name__}")

	def test_width(self):
		result = self.square.width(2)
		assert result == 4
```

### Fixture
```python
# file.py
class Square:
	def __init__(self, length):
		self.length = length

	def width(self):
		return self.length ** 2

# conftest.py or in test_file.py
import pytest
from file_dir.file import Square

@pytest.fixture
def square_fixture():
	return Square(length=2)

# test_file.py
import pytest

class TestSquare:
	def test_width(self, square_fixture):
		result = square_fixture.width()
		assert result == 4
```

### Scope

```python
# test_file.py

@pytest.fixture(scope='module')
def setup_module():
	yield

"""
@pytest.fixture(scope='fuction')
@pytest.fixture(scope='class')
@pytest.fixture(scope='session')
"""
```
### Marking

```python
import pytest

@pytest.mark.slow
def test_slow_function():
	assert True

@pytest.mark.skip(reason="Function not implemented")
def test_not_implement():
	assert True

"""
@pytest.mark.skipif(condition=True, reason="Condition is True")
@pytest.mark.xfail
@pytest.mark.performance
@pytest.mark.smoke
"""
```

### Parametrized

```python
import pytest

@pytest.mark.parametrize("input, expected", [(1, 2), (2, 4)])
def test_multiply_by_two(input, expected):
	result = input * 2
	assert result == expected
```

### Exception

```python
import pytest

def test_exception():
	with pytest.raises(ValueError):
		raise ValueError("This is value ERROR!")
```

