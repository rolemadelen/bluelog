---
title: "12948. 핸드폰 번호 가리기"
from: 'programmers'
level: 'easy'
---

Level 1 [핸드폰 번호 가리기](https://programmers.co.kr/learn/courses/30/lessons/12948)

시간 복잡도: **O(len(n))**, len(n) = length of `phone_number`

```cpp
#include <string>
#include <vector>
using namespace std;

string solution(string phone_number) {
  const int BOUND = phone_number.size()-4;
  for(int i=0; i<BOUND; ++i) phone_number[i] = '*';
  return phone_number;
}
```