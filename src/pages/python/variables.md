---
layout: ../../layouts/TutorialLayout.astro
title: "Variables in Python"
description: "Learn how to create and name variables in Python with simple examples."
order: 2
group: "Basics"
---

A variable is a name that stores a value. You do not need to declare its type, Python works it out.

```python
name = "Mukta"
age = 20
price = 49.5

print(name, age, price)
```

## Naming rules

- Use letters, digits and underscores only
- Cannot start with a digit
- No spaces; use `student_name`, not `student name`
- Names are case-sensitive: `Age` and `age` are different
- Do not use Python keywords like `if` or `for`

## Assigning many values

```python
a, b, c = 1, 2, 3
x = y = 0
```

## Swapping two variables

```python
a = 5
b = 10
a, b = b, a
print(a, b)   # 10 5
```

## Practice

Create variables for your name, year of study and CGPA, then print them in one line.