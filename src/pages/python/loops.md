---
layout: ../../layouts/TutorialLayout.astro
title: "Loops in Python"
description: "Learn for loops, while loops, range, break and continue in Python with examples."
order: 6
group: "Basics"
---

A loop repeats code so you do not have to write it many times.

## for loop with range()

```python
for i in range(5):
    print(i)          # 0 1 2 3 4

for i in range(1, 6):
    print(i)          # 1 to 5

for i in range(0, 10, 2):
    print(i)          # 0 2 4 6 8
```

## Looping over a list

```python
skills = ["Python", "SQL", "Excel"]
for skill in skills:
    print(skill)
```

## while loop

```python
count = 1
while count <= 3:
    print("Count is", count)
    count += 1
```

## break and continue

```python
for i in range(1, 10):
    if i == 3:
        continue    # skip 3
    if i == 6:
        break       # stop at 6
    print(i)        # 1 2 4 5
```

## Nested loops

```python
for i in range(1, 4):
    for j in range(1, 4):
        print(i * j, end=" ")
    print()
```

## Practice

Print the multiplication table of 7 up to 10.
