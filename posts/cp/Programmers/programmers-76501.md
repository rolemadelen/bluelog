---
title: "76501. 음양 더하기"
from: 'programmers'
level: 'easy'
---

Level 1 [음양 더하기](https://programmers.co.kr/learn/courses/30/lessons/76501)

시간 복잡도: **O(N)**

```cpp
#include <string>
#include <vector>

using namespace std;

int solution(vector<int> absolutes, vector<bool> signs) {
  int answer = 0;

  for(int i=signs.size()-1; i>=0; --i) {
    answer += ((signs[i]) ? absolutes[i] : absolutes[i] * -1);
  }

  return answer;
}
```