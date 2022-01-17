---
title: "12925. 문자열을 정수로 바꾸기"
from: 'programmers'
level: 'easy'
---

Level 1 [문자열을 정수로 바꾸기](https://programmers.co.kr/learn/courses/30/lessons/12925)

시간 복잡도: **O(N)**

```cpp
#include <string>
#include <vector>
using namespace std;

int solution(string s) {
  int neg = 1;
  int answer = 0;
  for(int i=0; i<s.size(); ++i) {
    if(s[i]=='-') {
      neg = -1;
      continue;
    } else if (s[i] == '+') {
      continue;
    } else {
      answer = (answer*10) + (s[i]-'0');
    }
  }
  return neg*answer;
}
```

내장 함수인 `stoi(s)` 또는 `atoi(s.c_str())`를 사용하면 훨씬 간단히 문제를 풀 수 있다.

```cpp

#include <string>
#include <vector>
using namespace std;

int solution(string s) {
  return stoi(s);
}
```
