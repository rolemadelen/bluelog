---
title: "12926. 시저 암호"
from: 'programmers'
level: 'easy'
---

Level 1 [시저 암호](https://programmers.co.kr/learn/courses/30/lessons/12926)

시간 복잡도: **O(n)**

```cpp
#include <string>
using namespace std;

string solution(string s, int n) {
  const int SIZE = s.size();

  for(int i=0; i<SIZE; ++i) {
    if(s[i]==' ') continue;
    if(islower(s[i])) {
      s[i] = 97 + ((s[i]-97+n)%26);
    } else if(isupper(s[i])) {
      s[i] = 65 + ((s[i]-65+n)%26);
    }
  }

  return s;
}
```

소문자와 대문자의 확인은 각각 `islower()`와 `isupper()`함수를 사용했다.