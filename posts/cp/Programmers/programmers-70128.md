---
title: "70128. 내적"
from: 'programmers'
level: 'easy'
---

Level 1 [내적](https://programmers.co.kr/learn/courses/30/lessons/70128)

시간 복잡도: **O(N)**

```cpp
#include <string>
#include <vector>
using namespace std;

int solution(vector<int> a, vector<int> b) {
  int answer = 0;

  const int SIZE = a.size();
  for(int i=0; i<SIZE; ++i) answer += (a[i]*b[i]);

  return answer;
}
```