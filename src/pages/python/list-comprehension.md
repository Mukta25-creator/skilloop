---
layout: ../../layouts/TutorialLayout.astro
title: "List Comprehension in Python"
description: "Learn list comprehension in Python to create lists in one line, with conditions."
order: 13
group: "Data Structures"
---

List comprehension is a short way to build a list.

```python
squares = [x ** 2 for x in range(5)]
print(squares)    # [0, 1, 4, 9, 16]
```

Same as this loop:

```python
squares = []
for x in range(5):
    squares.append(x ** 2)
```

## With a condition

```python
evens = [x for x in range(10) if x % 2 == 0]
print(evens)    # [0, 2, 4, 6, 8]
```

## With if-else

```python
labels = ["even" if x % 2 == 0 else "odd" for x in range(4)]
print(labels)    # ['even', 'odd', 'even', 'odd']
```

## Dictionary comprehension

```python
cubes = {x: x ** 3 for x in range(1, 4)}
print(cubes)    # {1: 1, 2: 8, 3: 27}
```

## Practice

From a list of words, create a list containing only the words longer than 4 letters.
