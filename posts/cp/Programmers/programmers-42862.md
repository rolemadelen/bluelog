---
title: "42862. 체육복"
from: 'programmers'
level: 'easy'
---

Level 1 [체육복](https://programmers.co.kr/learn/courses/30/lessons/42862)

시간 복잡도: **O(N)**


```cpp
#include <string>
#include <vector>

using namespace std;

int solution(int n, vector<int> lost, vector<int> reserve) {
  int answer = 0;

  vector<int> roster(n, 1);
  for(int a : reserve) ++roster[a-1];
  for(int a : lost) --roster[a-1];
  for(int i=0; i<n; ++i) {
    if(roster[i]) ++ answer;
    else {
      if(i-1 >= 0 && roster[i-1] > 1) {
        ++answer;
        roster[i]++;
      }
      else if(i+1 < n && roster[i+1] > 1) {
        ++answer;
        roster[i]++;
        roster[i+1]--;
      }
    }
  }
  return answer;
}
```


체육복을 가지고 있는 경우 바로 `+1`을 한다. 체육복이 없는 경우 이전과 다음 학생을 확인, 여유분이 있으면 `+1` 해준다.