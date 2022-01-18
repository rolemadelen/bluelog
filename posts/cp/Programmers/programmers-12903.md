---
title: "12903. 가운데 글자 가져오기"
from: 'programmers'
level: 'easy'
---

Level 1 [가운데 글자 가져오기](https://programmers.co.kr/learn/courses/30/lessons/12903)

시간 복잡도: **O(1)**

```cpp
#include <string>
#include <vector>
using namespace std;

string solution(string s) {
  int mid = s.size() >> 1;
  string str = "";

  if((s.size()&1) == 0) {
    str += s[mid-1];
    str += s[mid];
  }
  else str = s[mid];

  return str;
}
```