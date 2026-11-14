---
layout: ../../layouts/TutorialLayout.astro
title: "If-Else in Python"
description: "Learn how to make decisions in Python using if, elif and else with examples."
order: 5
group: "Basics"
---

Use `if` to run code only when a condition is true.

```python
age = 18

if age >= 18:
    print("You can vote")
else:
    print("You cannot vote yet")
```

Python uses **indentation** (4 spaces) to know which lines belong to the `if`. Do not forget the colon `:`.

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

Python checks from top to bottom and runs the first true condition.

## Nested if

```python
age = 20
has_id = True

if age >= 18:
    if has_id:
        print("Entry allowed")
```

## One-line if (ternary)

```python
marks = 72
result = "Pass" if marks >= 40 else "Fail"
print(result)    # Pass
```

## Practice

Write a program that checks whether a number is positive, negative or zero.
