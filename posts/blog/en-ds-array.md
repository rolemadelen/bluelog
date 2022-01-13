---
title: "Array"
subtitle: "Learn characteristics and basic operations of an Arrary"
date: "2021-05-10"
lang: "en"
tags:
- arrays
---


## Array

A linear data structure where all the elements are stored in consecutive memory locations.
![array](/images/in-post/dsa/array/array.png)


### Characteristics
1. Takes **constant time** to access and modify the element
2. No (or small) memory overheads
3. The [cache hit rate](https://www.cloudflare.com/learning/cdn/what-is-a-cache-hit-ratio/) is high.
4. A block of space is required to allocate a memory for the array, so there's a limit on how large the array can be.

### Operations
> We're going to assume the array is dynamic where its size automatically grows and shrinks.

#### Access & Modify: O(1)
![array access/modify](/images/in-post/dsa/array/array-access-modify.png)

We can use the `[]` operator to access and modify the element directly in constant time.

```cpp
int size = 8;
int arr[size] = {1, 1, 2, 3, 5, 9, 13, 21};
arr[5] = 8; // O(1)
```

#### Inserting at the end: O(1)
Increment the size of an array by 1 and store the data in the new available space.

![array pushback](/images/in-post/dsa/array/array-pushback.png)

#### Deleting the last element: O(1)

Decrement the size of an array by 1.

![array pop back](/images/in-post/dsa/array/array-popback.png)

#### InsertAt(index): O(N) 
![array insert at](/images/in-post/dsa/array/array-insertat.png)

Inserting a new node in the middle of the list requires an extra bit of steps.
Once we find the position to insert a new node, we need to shift every nodes after that position by one space to the right.
And this task requires a linear time. 

```cpp
void insertAt(int index, int data, int *arr, int &len) {
  int temp = len; 
  while(temp >= index) {
    arr[temp] = arr[temp-1];
    --temp;
  }

  arr[temp] = data;
  ++len;
}
```

#### DeleteAt(index): O(N)
![array delete at](/images/in-post/dsa/array/array-deleteat.png)

Deleting a node in the middle of the list is similar to the one inserting in the middle. 
Instead of shifting everything to the right, we need to shift everything back so there's no gap in the middle.
Which also requires a linear time.

```cpp
void removeAt(int index, int *arr, int &len) {
  for(int i=index-1; i<len; ++i) 
    arr[i] = arr[i+1];

  --len;
}
```

## Reference
- [https://blog.encrypted.gg/927?category=773649](https://blog.encrypted.gg/927?category=773649)