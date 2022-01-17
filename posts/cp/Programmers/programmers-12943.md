---
title: "12943. 콜라츠 추측"
from: 'programmers'
level: 'easy'
---

Level 1 [콜라츠 추측](https://programmers.co.kr/learn/courses/30/lessons/12943)

> 이 문제는 최대 500번 까지 반복하니까 O(500)이라고 봐야하나...

```cpp
#include <bits/stdc++.h>
using namespace std;

int solution(int num) {
  long long n = num;
  int i;
  for(i=0; i<500; ++i) {
    if(n == 1) break;
    if((n&1)==0) n = n >> 1;
    else n = n * 3 + 1;
  }

  return (n==1) ? i : -1;
}
```