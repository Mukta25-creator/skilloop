---
layout: ../../layouts/TutorialLayout.astro
title: "Functions in Python"
description: "Learn how to create and use functions in Python with parameters, return values and default arguments."
order: 14
group: "Functions and Files"
---

A function is a block of code that you write once and use many times.

```python
def greet():
    print("Hello!")

greet()
greet()
```

## Parameters and return

```python
def add(a, b):
    return a + b

result = add(5, 3)
print(result)    # 8
```

## Default values

```python
def greet(name="Student"):
    print("Hello,", name)

greet()            # Hello, Student
greet("Mukta")     # Hello, Mukta
```

## Keyword arguments

```python
def intro(name, year):
    print(name, "is in year", year)

intro(year=3, name="Mukta")
```

## *args: any number of arguments

```python
def total(*numbers):
    return sum(numbers)

print(total(1, 2, 3, 4))    # 10
```

## Variable scope

A variable created inside a function exists only inside it.

```python
def demo():
    x = 10
    print(x)

demo()
# print(x)   # would give an error
```

## Practice

Write `is_even(number)` that returns True or False, and `factorial(n)` that returns n factorial.
