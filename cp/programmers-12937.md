---
from: 'programmers'
level: 'easy'
---

Level 1 [짝수와 홀수](https://programmers.co.kr/learn/courses/30/lessons/12937)

시간 복잡도: **O(1)**

```cpp
#include <bits/stdc++.h>
using namespace std;
string solution(int num) {
    return (num&1) ? "Odd" : "Even";
}
```