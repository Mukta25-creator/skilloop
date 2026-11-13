---
layout: ../../layouts/TutorialLayout.astro
title: "Operators in Python"
description: "Learn arithmetic, comparison and logical operators in Python with simple examples."
---

Operators perform actions on values. Python has three groups you will use every day.

## Arithmetic operators

```python
a = 10
b = 3

print(a + b)   # 13  addition
print(a - b)   # 7   subtraction
print(a * b)   # 30  multiplication
print(a / b)   # 3.333...  division
print(a // b)  # 3   floor division
print(a % b)   # 1   remainder
print(a ** b)  # 1000  power
```

## Comparison operators

These give `True` or `False`.

```python
x = 5
print(x == 5)   # True
print(x != 5)   # False
print(x > 3)    # True
print(x <= 4)   # False
```

## Logical operators

```python
age = 20
has_id = True

print(age >= 18 and has_id)   # True
print(age < 18 or has_id)     # True
print(not has_id)             # False
```

Next: [If-else in Python](/python/if-else)
