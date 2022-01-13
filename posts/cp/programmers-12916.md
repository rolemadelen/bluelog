---
from: 'programmers'
level: 'easy'
---

Level 1 [문자열 내 p와 y의 개수](https://programmers.co.kr/learn/courses/30/lessons/12916)

시간 복잡도: **O(N)**

```cpp
#include <string>
#include <iostream>
using namespace std;

bool solution(string s)
{
  int p=0, y=0;

  for(int i=s.size()-1; i>=0; --i) {
    if(s[i] == 'p' || s[i] == 'P') ++p;
    else if(s[i] == 'y' || s[i] == 'Y') ++y;
  }

  return p==y;

}
```