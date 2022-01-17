---
title: "12917. 문자열 내림차순으로 배치하기"
from: 'programmers'
level: 'easy'
---

Level 1 [문자열 내림차순으로 배치하기](https://programmers.co.kr/learn/courses/30/lessons/12917)

시간 복잡도: **O(n lgn)**

```cpp
#include <bits/stdc++.h>
using namespace std;

string solution(string s) {
    sort(s.rbegin(), s.rend());
    return s;
}
```