---
layout: ../../layouts/TutorialLayout.astro
title: "Lists in Python"
description: "Learn Python lists: create, access, change, sort and loop through lists."
order: 9
group: "Data Structures"
---

A list stores many values in one variable. Lists are ordered and changeable.

```python
skills = ["Python", "SQL", "Excel"]
print(skills[0])      # Python
print(skills[-1])     # Excel
print(skills[0:2])    # ['Python', 'SQL']
```

## Changing a list

```python
skills.append("Java")        # add at end
skills.insert(1, "HTML")     # add at position
skills.remove("SQL")         # remove by value
last = skills.pop()          # remove last item
skills[0] = "Python 3"       # change item
```

## Common operations

```python
nums = [5, 2, 9, 1]
print(len(nums))     # 4
print(max(nums))     # 9
print(min(nums))     # 1
print(sum(nums))     # 17
nums.sort()          # [1, 2, 5, 9]
nums.reverse()       # [9, 5, 2, 1]
print(5 in nums)     # True
```

## Looping

```python
for n in nums:
    print(n)

for i, n in enumerate(nums):
    print(i, n)
```

## Copying a list

```python
a = [1, 2, 3]
b = a.copy()    # separate copy (b = a would share the same list)
```

## Practice

Find the second largest number in a list.
