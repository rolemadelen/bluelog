---
from: 'programmers'
level: 'easy2'
---

Level 2 [짝지어 제거하기](https://programmers.co.kr/learn/courses/30/lessons/12973)

시간 복잡도: **O(n)**

```cpp
#include <bits/stdc++.h>
using namespace std;

int solution(string s)
{
  const int SIZE = s.size ();
  stack<char> stk;

  for(int i=0; i<SIZE; ++i) {
    if(stk.empty()) stk.push(s[i]);
    else {
      char t = stk.top();
      if(s[i] == t) stk.pop();
      else stk.push(s[i]);
    }
  }

  return stk.empty();
}
```

괄호 검사 (VPS) 알고리즘이랑 똑같아서 그대로 풀어봤다.
