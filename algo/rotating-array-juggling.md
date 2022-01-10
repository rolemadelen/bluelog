---
title: "Array rotation: Juggling Algorithm"
date: "2021-11-11"
category: 'array'
lang: "C"
---

```c
#include <stdio.h>
#include <stdlib.h>

/*
 * Method: Juggling Algorithm
 * Time complexity O(N) 
 * Auxiliary Space O(1) 
 * */

int gcd(int a, int b) {
  return (b==0) ? a : gcd(b, a%b);
}

void leftRotate(int *arr, int d, const int N) {
  d = d % N;
  int _gcd = gcd(d, N);

  for(int i=0; i<_gcd; ++i) {
    // move i_th values of blocks
    int temp = arr[i];
    int j = i;

    while(1) {
      int k = j + d;
      if (k >= N) k = k - N;
      if (k == i) break;
      arr[j] = arr[k];
      j = k;
    }

    arr[j] = temp;
  }
}

void rightRotate(int *arr, int d, const int N) {
  d = d % N;
  int _gcd = gcd(d, N);

  for(int i=0; i<_gcd; ++i) {
    // move i_th values of blocks
    int temp = arr[(N-1) - i];
    int j = i;

    while(1) {
      int k = j + d;
      if (k >= N) k = k - N;
      if (k == i) break;
      arr[(N-1) - j] = arr[(N-1) - k];
      j = k;
    }

    arr[(N-1) - j] = temp;
  }
}
```