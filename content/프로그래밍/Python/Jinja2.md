---
title: Jinja2
tags:
  - 프로그래밍
date: 2023-11-19
---
---

> 파이썬 기반의 템플릿 엔진

1. 변수 출력

```jinja2
{{ variable_name }}
```

2. 제어문

```jinja2
{% if condition %}
	{# true #}
{% else %}
	{# false #}
{% endif %}

###

{% for item in items %}
	{# literal #}
{% endfor %}
```

3. 필터

```jinja2
{{ variable_name|filter_name}}
```

4. 매크로

```jinja2
{% macro my_marco(param) %}
	{# marco #}
{% endmarco %}
```

5. 상속

```jinja2
{% extends "base_template.html" %}
{% block content %}
	{# content #}
{% endblock %}
```

6. 주석

```jinja2
{# comment #}
```

7. Include

```Jinja2
{% include "index.html" %}
```

---

### 참조자료:

- 