---
title: "68935. 3진법 뒤집기"
from: 'programmers'
level: 'easy'
---

Level 1 [3진법 뒤집기](https://programmers.co.kr/learn/courses/30/lessons/68935)

시간 복잡도: **O(max(log3(N), len(S)))**, S = the length of base3 num

```cpp
#include <bits/stdc++.h>
using namespace std;

int solution(int n) {
  string base3 = "";

  while(n>2) {
    int div = n/3;
    int rem = n%3;
    base3 += to_string(rem);
    n /= 3;
  }
  base3 += to_string(n);

  int sum = 0;
  const int SIZE = base3.size();
  for(int i=SIZE-1, j=0; i>=0; --i, ++j) {
    sum = sum + (base3[i]-'0')*powl(3, j);
  }

  return sum;
}
```

값을 3으로 나눈 나머지를 가지고 3진법으로 변환을 한다. 이렇게 할 경우 지동적으로 앞뒤 반전이 된 형태가 된다.
