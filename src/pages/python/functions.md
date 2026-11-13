---
layout: ../../layouts/TutorialLayout.astro
title: "Functions in Python"
description: "Learn how to create and use functions in Python with parameters, return values and default arguments."
---

A function is a block of code that you write once and use many times.

## Creating a function

```python
def greet():
    print("Hello!")

greet()
greet()
```

## Parameters

```python
def greet(name):
    print("Hello,", name)

greet("Mukta")
```

## Returning a value

```python
def add(a, b):
    return a + b

result = add(5, 3)
print(result)   # 8
```

## Default values

```python
def greet(name="Student"):
    print("Hello,", name)

greet()          # Hello, Student
greet("Mukta")   # Hello, Mukta
```

## Practice

Write a function `is_even(number)` that returns `True` if the number is even and `False` otherwise.
