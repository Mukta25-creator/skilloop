---
layout: ../../layouts/TutorialLayout.astro
title: "Data Types in Python"
description: "Learn the main data types in Python: int, float, str, bool, list, tuple, dict and set, with examples."
---

Every value in Python has a type. The type decides what you can do with the value.

## Common data types

| Type | Example | Meaning |
|---|---|---|
| `int` | `10` | Whole number |
| `float` | `3.14` | Decimal number |
| `str` | `"Hello"` | Text |
| `bool` | `True` | True or False |
| `list` | `[1, 2, 3]` | Ordered, changeable collection |
| `tuple` | `(1, 2, 3)` | Ordered, unchangeable collection |
| `dict` | `{"name": "Mukta"}` | Key and value pairs |
| `set` | `{1, 2, 3}` | Unique items, no order |

## Checking a type

Use the `type()` function:

```python
age = 20
price = 49.5
name = "Mukta"
is_student = True

print(type(age))
print(type(price))
print(type(name))
print(type(is_student))
```

Output:

```
<class 'int'>
<class 'float'>
<class 'str'>
<class 'bool'>
```

## List and dictionary example

```python
skills = ["Python", "SQL", "Excel"]
student = {"name": "Mukta", "year": 3}

print(skills[0])
print(student["name"])
```

Next: [Operators in Python](/python/operators)