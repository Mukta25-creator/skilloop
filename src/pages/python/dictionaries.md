---
layout: ../../layouts/TutorialLayout.astro
title: "Dictionaries in Python"
description: "Learn Python dictionaries: key-value pairs, adding, updating, looping and nested dictionaries."
order: 12
group: "Data Structures"
---

A dictionary stores data as **key: value** pairs.

```python
student = {"name": "Mukta", "year": 3, "city": "Bengaluru"}
print(student["name"])           # Mukta
print(student.get("age", 0))     # 0 (safe way, no error)
```

## Changing a dictionary

```python
student["year"] = 4          # update
student["cgpa"] = 8.5        # add
del student["city"]          # delete
```

## Looping

```python
for key in student:
    print(key, student[key])

for key, value in student.items():
    print(key, "->", value)

print(student.keys())
print(student.values())
```

## Checking a key

```python
print("name" in student)    # True
```

## Nested dictionary

```python
students = {
    "A101": {"name": "Asha", "marks": 80},
    "A102": {"name": "Ravi", "marks": 75},
}
print(students["A101"]["name"])    # Asha
```

## Practice

Count how many times each word appears in a sentence using a dictionary.
