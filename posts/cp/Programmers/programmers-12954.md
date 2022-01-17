---
title: "12954. x만큼 간격이 있는 n개의 숫자"
from: 'programmers'
level: 'easy'
---

Level 1 [x만큼 간격이 있는 n개의 숫자](https://programmers.co.kr/learn/courses/30/lessons/12954)

시간 복잡도: **O(N)**

```cpp
#include <string>
#include <vector>
using namespace std;

vector<long long> solution(int x, int n) {
  vector<long long> answer(n, 0);
  answer[0] = x;

  for(int i=1; i<n; ++i) answer[i] = answer[i-1] + x;
  return answer;
}
```