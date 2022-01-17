---
title: "12944. 평균 구하기"
from: 'programmers'
level: 'easy'
---

Level 1 [평균 구하기](https://programmers.co.kr/learn/courses/30/lessons/12944)

시간 복잡도: **O(N)**

```cpp
#include <bits/stdc++.h>
using namespace std;

double solution(vector<int> arr) {
  int sum = accumulate(arr.begin(), arr.end(), 0);
  return (sum / (double)arr.size());
}
```