---
from: 'programmers'
level: 'easy'
---

Level 1 [두 정수 사이의 합](https://programmers.co.kr/learn/courses/30/lessons/12912)

시간 복잡도: **O(dist(a, b))**, a < b

```cpp
#include <string>
#include <vector>
using namespace std;

long long solution(int a, int b) {
  long long answer = 0;
  int mn = min(a,b);
  int mx = max(a, b);
  for(int i=mn; i<=mx; ++i) answer += i;
  return answer;
}
```