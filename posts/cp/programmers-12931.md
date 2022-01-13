---
from: 'programmers'
level: 'easy'
---

Level 1 [자릿수 더하기](https://programmers.co.kr/learn/courses/30/lessons/12931)

시간 복잡도: **O(N)**

```cpp
#include <iostream>
using namespace std;

int solution(int n)
{
  int ret=0;
  while(n) {
    ret += n%10;
    n/=10;
  }

  return ret;
}
```

`N`이 0이 될때까지 마지막 숫자를 잘라서 더해준다.