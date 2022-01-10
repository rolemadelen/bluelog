---
title: "Array rotation: Two pointers"
date: "2021-11-11"
category: 'array'
lang: "C"
---

```c
#include <stdio.h>
#include <stdlib.h>

/*
 * Method: 2 pointers to rotate clockwise
 * Time complexity O(N) 
 * Auxiliary Space O(1) 
 * */

void swap(int *a, int *b) {
  int temp = *a;
  *a = *b;
  *b = temp;
}

void rotate(int *arr, const int N) {
  for(int i=0, j=N-1; i!=j; ++i)
    swap(&arr[i], &arr[j]);
}
```