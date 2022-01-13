---
from: 'programmers'
level: 'easy'
---

Level 1 [문자열 다루기 기본](https://programmers.co.kr/learn/courses/30/lessons/12918)

시간 복잡도: **O(N)**

```cpp
#include <bits/stdc++.h>
using namespace std;

bool solution(string s) {
  const int SIZE = s.size();
  if(SIZE!=4 && SIZE!=6) return false;
  for(int i=0; i<SIZE; ++i)
    if(isalpha(s[i])) return false;
  return true;
}
```


`isalpha()`함수를 사용하여 문자인지 확인을 했다. 반대로 숫자인지 확인하는 `isdigit()`함수도 존재한다.