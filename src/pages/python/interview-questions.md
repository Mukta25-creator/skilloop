---
layout: ../../layouts/TutorialLayout.astro
title: "Python Interview Questions for Freshers"
description: "Common Python interview questions with simple answers and code examples for freshers and placement preparation."
order: 30
group: "Practice"
---

Use these questions to practise. Read each answer, then explain it in your own words, because interviewers can tell when an answer is memorised.

## 1. What is the difference between a list and a tuple?
A list is changeable (mutable). A tuple cannot be changed (immutable) and is slightly faster.

```python
a = [1, 2, 3]
a[0] = 10          # works

b = (1, 2, 3)
# b[0] = 10        # TypeError
```

## 2. What is the difference between `==` and `is`?
`==` checks whether values are equal. `is` checks whether two names point to the same object in memory.

```python
x = [1, 2]
y = [1, 2]
print(x == y)    # True
print(x is y)    # False
```

## 3. What are mutable and immutable types?
Mutable types can change after creation: list, dict, set. Immutable types cannot: int, float, str, tuple.

## 4. What is the difference between a list, a set and a dictionary?
A list is ordered and allows duplicates. A set holds unique values. A dictionary stores key-value pairs.

## 5. What are `*args` and `**kwargs`?
`*args` collects extra positional arguments into a tuple. `**kwargs` collects extra keyword arguments into a dictionary.

```python
def show(*args, **kwargs):
    print(args)
    print(kwargs)

show(1, 2, name="Mukta")
# (1, 2)
# {'name': 'Mukta'}
```

## 6. What is a lambda function?
A small anonymous one-line function, such as `lambda x: x * 2`.

## 7. What is list comprehension?
A short way to build a list.

```python
squares = [x * x for x in range(5)]
print(squares)    # [0, 1, 4, 9, 16]
```

## 8. What is the difference between a shallow copy and a deep copy?
A shallow copy copies the outer object but shares the inner objects. A deep copy (`copy.deepcopy`) copies everything inside too.

```python
import copy

a = [[1, 2], [3, 4]]
shallow = copy.copy(a)
deep = copy.deepcopy(a)

a[0][0] = 99
print(shallow[0][0])    # 99 (shared)
print(deep[0][0])       # 1  (separate)
```

## 9. How does exception handling work?
Put risky code in `try`, handle errors in `except`, use `else` when there is no error and `finally` for code that must always run.

## 10. What is `__init__`?
The constructor method that runs automatically when an object is created. It sets up the object's attributes.

## 11. What is the difference between `range()` and a list?
`range()` produces numbers one at a time and uses very little memory, while a list stores every item.

## 12. How do you reverse a string?

```python
text = "Python"
print(text[::-1])    # nohtyP
```

## 13. What is the difference between `append()` and `extend()`?
`append()` adds one item. `extend()` adds every item from another list.

```python
a = [1, 2]
a.append([3, 4])
print(a)    # [1, 2, [3, 4]]

b = [1, 2]
b.extend([3, 4])
print(b)    # [1, 2, 3, 4]
```

## 14. What is a decorator?
A function that adds extra behaviour to another function without changing it. See our [Decorators lesson](/python/decorators) once it is added to the course.

## 15. How do you remove duplicates from a list?

```python
data = [1, 2, 2, 3, 3]
print(list(set(data)))    # [1, 2, 3] (order may change)
```

## Practice

Write short code answers for questions 1, 5 and 8 and run them in Python. Then explain each one aloud, as if to an interviewer.

Next, practise with the [Python quiz](/tools/practice-quiz.html) and read the [HR interview questions](/career/hr-interview-questions).