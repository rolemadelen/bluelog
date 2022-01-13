---
from: 'programmers'
level: 'easy'
---

Level 1 [서울에서 김서방 찾기](https://programmers.co.kr/learn/courses/30/lessons/12919)

시간 복잡도: **O(n)**

```cpp
#include <bits/stdc++.h>
using namespace std;

string solution(vector<string> seoul) {
  int i = find(seoul.begin(), seoul.end(), "Kim") - seoul.begin();
  string s = "김서방은 " + to_string(i) + "에 있다";
  return s;
}
```

`find()`를 사용해서 찾은 위치에서 시작점인 `.begin()`을 빼주면 위치(인덱스)값을 알 수 있다.
 
```cpp
int index = find(seoul.begin(), seoul.end(), "Kim") - seoul.begin();
```