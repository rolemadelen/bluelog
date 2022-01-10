---
from: 'programmers'
level: 'easy'
---

Level 1 [예산](https://programmers.co.kr/learn/courses/30/lessons/12982)

시간 복잡도: **O(N log N)** 

```cpp
#include <bits/stdc++.h>
using namespace std;

int solution(vector<int> d, int budget) {
  int answer = 0;
  const int SIZE = d.size();

  sort(d.begin(), d.end());
  for(int i=0; i<SIZE; ++i) {
    budget -= d[i];
    if(budget < 0) break;
    ++answer;
  }
  return answer;
}
```

최대한 많은 부서에 지원금을 주기위해 지원금이 낮은 쪽 부터 차례대로 주면 된다.
