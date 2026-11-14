---
layout: ../../layouts/TutorialLayout.astro
title: "If-Else in Python"
description: "Learn how to make decisions in Python using if, elif and else with examples."
---

Use `if` to run code only when a condition is true.

## Basic if-else

```python
age = 18

if age >= 18:
    print("You can vote")
else:
    print("You cannot vote yet")
```

Python uses **indentation** (4 spaces) to know which lines belong to the `if`. Do not forget the colon `:` at the end of the line.

## elif for more conditions

```python
marks = 72

if marks >= 90:
    print("Grade A")
elif marks >= 60:
    print("Grade B")
elif marks >= 40:
    print("Grade C")
else:
    print("Fail")
```

Python checks each condition from top to bottom and runs the first one that is true.

## Practice

Write a program that checks whether a number is even or odd (hint: use `number % 2 == 0`).

Next: [Loops in Python](/python/loops)