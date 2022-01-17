---
title: "12969. 직사각형 별찍기"
from: 'programmers'
level: 'easy'
---

Level 1 [직사각형 별찍기](https://programmers.co.kr/learn/courses/30/lessons/12969)

시간 복잡도: **O(A*B))**

```cpp
#include <cstdio>
using namespace std;

int main(void) {
  int a, b;
  scanf("%d%d", &a, &b);

  for(int i=0; i<b; ++i) {
    for(int j=0; j<a; ++j)
      printf("*");
    printf("\n");
  }

  return 0;
}
```