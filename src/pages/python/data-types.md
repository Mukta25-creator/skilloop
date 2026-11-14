---
layout: ../../layouts/TutorialLayout.astro
title: "Data Types in Python"
description: "Learn the main Python data types: int, float, str, bool, list, tuple, dict and set."
order: 3
group: "Basics"
---

Every value in Python has a type. The type decides what you can do with it.

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

```python
print(type(20))        # int
print(type(3.5))       # float
print(type("Hi"))      # str
print(type(True))      # bool
```

## Type conversion

```python
print(int("25") + 5)     # 30
print(float("2.5"))      # 2.5
print(str(100) + " Rs")  # 100 Rs
print(bool(0))           # False
```

## Practice

Convert the string `"123"` to an integer and add 7 to it.
