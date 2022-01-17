---
title: "12932. 자연수 뒤집어 배열로 만들기"
from: 'programmers'
level: 'easy'
---

Level 1 [자연수 뒤집어 배열로 만들기](https://programmers.co.kr/learn/courses/30/lessons/12932)

시간 복잡도: **O(N)**

```cpp
#include <bits/stdc++.h>
using namespace std;

vector<int> solution(long long n) {
  vector<int> answer;
  while(n) {
    answer.push_back(n%10);
    n/=10;
  }
  return answer;
}
```

`N`이 0이 될때까지 마지막 숫자를 잘라서 배열에 추가한다.