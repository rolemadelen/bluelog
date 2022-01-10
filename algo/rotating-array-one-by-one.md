---
title: "Array rotation: One by One"
date: "2021-11-11"
category: 'array'
lang: "C"
---

```c
#include <stdio.h>
#include <stdlib.h>

/*
 * Method: Rotate one by one
 * Time complexity O(N*d) 
 * Auxiliary Space O(1) 
 * */

// Right rotate helper
void rightRotateByOne(int *arr, const int N) {
  int temp = arr[N-1];
  for(int i=N-1; i>0; --i) 
    arr[i] = arr[i-1];
  arr[0] = temp;
}

void rightRotate(int *arr, int d, const int N) {
  for(int i=0; i<d; ++i)
    rightRotateByOne(arr, N);
}

// Left rotate helper 
void leftRotateByOne(int *arr, const int N) {
  int temp = arr[0];
  for(int i=0; i<N-1; ++i)
    arr[i] = arr[i+1];
  arr[N-1] = temp;
}

void leftRotate(int *arr, int d, const int N) {
  for(int i=0; i<d; ++i)
    leftRotateByOne(arr, N);
}
```