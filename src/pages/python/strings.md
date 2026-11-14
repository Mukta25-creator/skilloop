---
layout: ../../layouts/TutorialLayout.astro
title: "Strings in Python"
description: "Learn Python strings: indexing, slicing and the most useful string methods."
order: 8
group: "Data Structures"
---

A string is text inside quotes.

```python
s = "Python"
print(len(s))      # 6
print(s[0])        # P
print(s[-1])       # n
print(s[1:4])      # yth
print(s[::-1])     # nohtyP (reversed)
```

Strings are **immutable**: you cannot change a character in place.

## Useful methods

```python
text = "  Hello World  "
print(text.strip())            # Hello World
print(text.upper())            # HELLO WORLD
print(text.lower())            # hello world
print(text.replace("World", "Python"))
print("a,b,c".split(","))      # ['a', 'b', 'c']
print("-".join(["a", "b"]))    # a-b
print("hello".find("l"))       # 2
print("hello".startswith("he"))  # True
```

## Checking content

```python
print("abc".isalpha())    # True
print("123".isdigit())    # True
print("py" in "python")   # True
```

## Practice

Check whether a word is a palindrome (reads the same backwards).
