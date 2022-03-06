---
title: "[C] Vector (mutable array) implementation"
subtitle: "Use arrays to implement a mutable array with automatic resizing"
lang: "en"
date: "2022-03-06"
tags:
- vector
---

Here are lists of functions to implement for the vector:
## Private function
- `resize(new_capacity)` 
  - double the capacity when vector is full
  - halve the capacity if size is 1/4 of capacity
## Public function
- `size()` - returns number of items in vector
- `capacity()` - returns number of items it can hold
- `is_empty()` - returns true if empty, else false
- `at(index)` - returns item at given index
- `push_back(data)` - adds data at the end of the vector
- `pop_back()` - removes the data from the end and returns it
- `prepend(data)` - inserts data at index 0
- `insert(index, data)` - inserts data at index, shifts that index's value and trailing elements to the right
- `delete(index)` - deletes data at index and shift all trailing elements left
- `remove(data)` - find and remove all data from the vector
- `find(data)` - looks for value and returns first index with that value, -1 if not found

## Things to keep in mind:
- Time complexity
  - constant time to add and remove data at the end, access, or update.
  - linear time to insert or remove elsewhere because of shifting.
- Space complexity
  - linear -> (array capacity) * (size of data)

---

## Implementation

[TL;DR -- source code](https://github.com/euisblue/data-structure-and-algorithm-study/blob/main/01_arrays/vector_implementation/main.c)

### Vector structure

I first defined a structure for the vector:
```c
typedef struct {
  int *arr;
  int capacity;
  int size;
} Vector;
```

`arr` is the array and it's declared as a pointer since it's a mutable array. So it needs to be dynamic not static.

I implemented `init()` function to initialize the vector and `destroy()` function to destory the instance at the end.

```c
#define INF 0x7FFFFFFF
#define DEFAULT_SIZE 16

void init(Vector *vec) {
  vec->capacity = DEFAULT_SIZE;
  vec->size = 0;
  vec->arr = (int *)(malloc(DEFAULT_SIZE * sizeof(int)));

  // initialize the element as infinity 
  for(int i=0; i<DEFAULT_SIZE; ++i) {
    (vec->arr)[i] = INF;
  }
}

void destroy(Vector *vec) {
  free(vec->arr);
  vec->arr = NULL;
  vec->size = 0;
  vec->capacity = 0;
}

int main() {
    Vector vec;
    init(&vec);
    
    ...

    destory(&vec);

    return 0;
}
```

## Resize the vector
Before we talk about adding/removing data, lets take a look at how resizing is done.

We have 2 cases for resizing:
1. if the vector is full and need to **double** the capacity.
2. if number of data in vector is 1/4 of capacity and need to **halve** the capacity.

We can check conditions and determine whether to double or halve the capacity in `resize`, but I didn't wanted to do that.

```c
static void resize(Vector *vec, int capacity) {
  vec->capacity = capacity;
  int *temp = (int *)(malloc(vec->capacity * sizeof(int)));

  // copy over data
  for(int i=0; i<vec->size; ++i) {
    temp[i] = (vec->arr)[i];
  }

  free(vec->arr);
  vec->arr = temp;
}
```

When adding or removing data, we will check the size and pass in the appropriate capacity in `resize`. Then this function will create a new array with the new capacity, copy over existing data, and re-assign the instance's array.

## Add data at the end
If we have 5 elements in the vector, `vec->size` will be `5`, but the index 5 means the 6th element. So we can use `vec->size` to add a data at the end in constant time.
But we need to make sure that we have enough space. When vector is full, we double the capacity by calling the function `resize` with doubled `capacity`.

```c
void push_back(Vector *vec, int size) {
  // double the size if vector is full
  if(vec->size == vec->capacity) {
    resize(vec, vec->capacity << 1);
  }

  (vec->arr)[vec->size] = size;
  ++(vec->size);
}
```
## Insert data in the beginning 

We need to shift all elements once to the right to empty the first element. Resizing is already covered, so no need worry about going off the boundary when shifting data.

```c
void prepend(Vector *vec, int data) {
  // double the size if vector is full
  if(vec->size == vec->capacity) {
    resize(vec, vec->capacity << 1);
  }

  ++(vec->size);
  for(int i=(vec->size)-1; i>0; --i) {
    (vec->arr)[i] = (vec->arr)[i-1];
  }

  (vec->arr)[0] = data;
}
```

## Insert data at any index

If inserting in the beginning or at the end, I utilized functions that I implemented earlier: `prepend` and `push_back`.
For the other case, I shifted all elements from given `idx` to the end once to the right.

```c
void insert(Vector *vec, int idx, int data) {
  // double the size if vector is full
  if(vec->size == vec->capacity) {
    resize(vec, vec->capacity << 1);
  }

  if(idx == 0) {
    prepend(vec, data);
  } else if (idx >= vec->size) {
    push_back(vec, data);
  } else {
    ++(vec->size);
    for(int i=vec->size-1; i>idx; --i) {
      (vec->arr)[i] = (vec->arr)[i-1];
    }

    (vec->arr)[idx] = data;
  }
}
```

## Remove data at the end

Removing is straightforward. Simply set the last element to `null` or `INF` in this case.
Once you removed an element, check if the size is smaller than that of quarter of the capacity. If so, halve the total capacity.

```c
int pop_back(Vector *vec) {
  if(is_empty(vec)) {
    printf(".... vector is empty\n");
    return -1;
  }

  // if size is 1/4 of capacity, halve the capacity
  int quart = vec->capacity / 4;
  if(vec->capacity > DEFAULT_SIZE && vec->size <= quart) {
    resize(vec, vec->capacity >> 1);
  }

  --(vec->size);
  int data = (vec->arr)[vec->size];
  (vec->arr)[vec->size] = INF;

  return data;
}
```

## Remove data at any index

When given index is greater than the total number of elements, instead of throwing an error, I decided to remove the last element by calling `pop_back`.

When the index is somewhere between, I shift all the elements once to the left starting from the given `idx`.

```c
int delete(Vector *vec, int idx) {
  if(idx >= vec->size) {
    return pop_back(vec);
  }

  int data = (vec->arr)[idx];

  for(int i=idx; i<vec->size; ++i) {
    (vec->arr)[i] = (vec->arr)[i+1];
  }

  --(vec->size);
  (vec->arr)[vec->size] = INF;
  
  return data;
}
```

## Remove all data that matches the given value

I used a temporary array to store all elements that isn't the `value` to delete. 

As I iterate the array, I will have a separate index(`p`) which tracks down the element that we're going to keep.
Eventually the `p` will become the total size after the removal.

```c
void _remove(Vector *vec, int value) {
  if(is_empty(vec)) return;

  int p = 0;
  int *temp = (int *)(malloc(vec->capacity * sizeof(int)));
  for(int i=0; i<vec->size; ++i) {
    if((vec->arr)[i] != data) {
      temp[p] = (vec->arr)[i]; 
      ++p;
    }
  }

  vec->size = p;
  free(vec->arr);
  vec->arr = temp;

  // if size is 1/4 of capacity, halve the capacity
  int quart = vec->capacity / 4;
  if(vec->capacity > DEFAULT_SIZE && vec->size <= quart) {
    resize(vec, vec->capacity >> 1);
  }
}
```

## Find data

Iterate the array and check if the data is what we're looking for. If found, return that index else return `-1`.

```c
int find(Vector *vec, int data) {
  int idx = -1;

  for(int i=0; i<vec->size; ++i) {
    if((vec->arr)[i] == data) {
      idx = i;
      break;
    }
  }

  return idx;
}
```
