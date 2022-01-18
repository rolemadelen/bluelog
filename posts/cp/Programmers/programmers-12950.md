---
title: "12950. 행렬의 덧셈"
from: 'programmers'
level: 'easy'
---

Level 1 [행렬의 덧셈](https://programmers.co.kr/learn/courses/30/lessons/12950)

시간 복잡도: **O(N*M)**

```cpp
#include <string>
#include <vector>
using namespace std;

vector<vector<int>> solution(vector<vector<int>> arr1, vector<vector<int>> arr2) {
  vector<vector<int>> answer;

  const int SIZE = arr1.size();

  for(int i=0; i<SIZE; ++i) {
    vector<int> temp;
    const int vSize = arr1[i].size();
    for(int j=0; j<vSize; ++j) {
      int x = arr1[i][j] + arr2[i][j];
      temp.push_back(x);
    }
    answer.push_back(temp);
  }
  return answer;
}
```