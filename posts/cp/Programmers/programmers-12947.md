---
title: "12947. 하샤드 수"
from: 'programmers'
level: 'easy'
---

Level 1 [하샤드 수](https://programmers.co.kr/learn/courses/30/lessons/12947)

시간 복잡도: **O(len(n))**, len(n) = number of digits

```cpp
#include <string>
#include <vector>
using namespace std;

bool solution(int x) {
  int sum = 0;
  int temp = x;

  while(temp) {
    sum += temp%10;
    temp /= 10;
  }

  return !(x % sum);
}
```