---
layout: ../../layouts/TutorialLayout.astro
title: "Sets in Python"
description: "Learn Python sets: unique values, set operations like union and intersection."
order: 11
group: "Data Structures"
---

A set stores **unique** values with no fixed order.

```python
nums = {1, 2, 2, 3, 3}
print(nums)    # {1, 2, 3}
```

## Adding and removing

```python
nums.add(4)
nums.remove(1)
nums.discard(99)    # no error if missing
```

## Removing duplicates from a list

```python
data = [1, 2, 2, 3, 3, 3]
unique = list(set(data))
print(unique)
```

## Set operations

```python
a = {1, 2, 3}
b = {3, 4, 5}
print(a | b)    # union: {1, 2, 3, 4, 5}
print(a & b)    # intersection: {3}
print(a - b)    # difference: {1, 2}
```

## Practice

Find the common skills between two students using sets.
