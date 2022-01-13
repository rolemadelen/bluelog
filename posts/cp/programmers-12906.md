---
from: 'programmers'
level: 'easy'
---

Level 1 [같은 숫자는 싫어](https://programmers.co.kr/learn/courses/30/lessons/12906)

시간 복잡도: **O(N)**

```cpp
#include <bits/stdc++.h>

using namespace std;

vector<int> solution(vector<int> arr) 
{
  vector<int> answer;
  if(arr.size() == 0) return answer;

  answer.push_back(arr[0]);

  for(int i=1; i<arr.size(); ++i) {
    if(answer[answer.size()-1] != arr[i]) answer.push_back(arr[i]);
  }

  return answer;
}
```