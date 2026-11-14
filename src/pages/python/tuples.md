---
layout: ../../layouts/TutorialLayout.astro
title: "Tuples in Python"
description: "Learn Python tuples: what they are, how to use them and how they differ from lists."
order: 10
group: "Data Structures"
---

A tuple is like a list, but it cannot be changed after creation.

```python
point = (10, 20)
print(point[0])     # 10
print(len(point))   # 2
```

A tuple with one item needs a comma: `single = (5,)`.

## Unpacking

```python
x, y = point
print(x, y)    # 10 20
```

## Tuple vs list

| | List | Tuple |
|---|---|---|
| Syntax | `[1, 2]` | `(1, 2)` |
| Changeable | Yes | No |
| Use when | Data will change | Data is fixed |

## Practice

Store a student's name, roll number and CGPA in a tuple and print each value.
