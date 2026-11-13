---
layout: ../../layouts/TutorialLayout.astro
title: "Loops in Python"
description: "Learn for loops and while loops in Python, with break and continue, using simple examples."
---

A loop repeats code so you do not have to write it many times.

## for loop

```python
for i in range(5):
    print(i)
```

Output: `0 1 2 3 4` (each on a new line). `range(5)` gives numbers from 0 to 4.

You can also loop over a list:

```python
skills = ["Python", "SQL", "Excel"]

for skill in skills:
    print(skill)
```

## while loop

A `while` loop runs as long as its condition is true.

```python
count = 1

while count <= 3:
    print("Count is", count)
    count = count + 1
```

## break and continue

```python
for i in range(1, 10):
    if i == 3:
        continue   # skip 3
    if i == 6:
        break      # stop the loop at 6
    print(i)
```

Output: `1 2 4 5`

Next: [Functions in Python](/python/functions)
