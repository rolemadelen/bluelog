---
title: "12922. 수박수박수박수박수박수?"
from: 'programmers'
level: 'easy'
---

Level 1 [수박수박수박수박수박수?](https://programmers.co.kr/learn/courses/30/lessons/12922)

시간 복잡도: **O(n)**

```cpp
#include <string>
#include <vector>
using namespace std;

string solution(int n) {
  string s[] = {"수", "박"};
  string answer = "";

  for(int i=0; i<n; ++i) {
    answer += s[i%2];
  }

  return answer;
}
```