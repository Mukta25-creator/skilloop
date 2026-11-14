---
layout: ../../layouts/TutorialLayout.astro
title: "Operators in Python"
description: "Learn arithmetic, comparison, logical, assignment and membership operators in Python."
order: 4
group: "Basics"
---

Operators perform actions on values.

## Arithmetic operators

```python
a, b = 10, 3
print(a + b)    # 13
print(a - b)    # 7
print(a * b)    # 30
print(a / b)    # 3.333...
print(a // b)   # 3  (floor division)
print(a % b)    # 1  (remainder)
print(a ** b)   # 1000 (power)
```

## Comparison operators (give True or False)

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

## Assignment operators

```python
n = 10
n += 5    # n = n + 5 -> 15
n *= 2    # 30
```

## Membership operators

```python
print("a" in "banana")        # True
print(5 not in [1, 2, 3])     # True
```

## Practice

Check whether a number is divisible by both 3 and 5.
