---
title: "12935. 제일 작은 수 제거하기"
from: 'programmers'
level: 'easy'
---

Level 1 [제일 작은 수 제거하기](https://programmers.co.kr/learn/courses/30/lessons/12935)

배열에서 가장 작은 수의 위치를 찾은 다음, 그 수를 제외한 숫자들을 따로 저장하는 방식. 

시간 복잡도: **O(N)**

```cpp
#include <bits/stdc++.h>
using namespace std;

vector<int> solution(vector<int> arr) {
  vector<int> answer;
  int minPos = 0;
  int min = arr[0];
  const int SIZE = arr.size();
  
  for(int i=1; i<SIZE; ++i) {
    if(arr[i] < min) {
      min = arr[i];
      minPos = i;
    }
  }

  for(int i=0; i<SIZE; ++i) {
    if(minPos == i) continue;
    answer.push_back(arr[i]);
  }

  if(answer.size() == 0) answer.push_back(-1);
  return answer;
}
#endif
```

문제를 풀고나서 `std::erase()`와 `std::min_element()`가 있다는 걸 알게되어 다시 풀었다.


시간 복잡도: **O(N)**

```cpp
#include <bits/stdc++.h>
using namespace std;

vector<int> solution(vector<int> arr) {
    vector<int> ret = arr;
    ret.erase(min_element(ret.begin(), ret.end()));
    
    return (ret.size() == 0) ? vector<int>(1, -1) : ret;
}
```