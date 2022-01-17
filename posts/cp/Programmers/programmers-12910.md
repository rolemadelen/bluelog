---
title: "12910. 나누어 떨어지는 숫자 배열"
from: 'programmers'
level: 'easy'
---

Level 1 [나누어 떨어지는 숫자 배열](https://programmers.co.kr/learn/courses/30/lessons/12910)

시간 복잡도: **O(Nlogn)**


```cpp
#include <bits/stdc++.h>

using namespace std;

vector<int> solution(vector<int> arr, int divisor) {
  vector<int> answer;
  const int SIZE = arr.size();

  for(int i=0; i<SIZE; ++i) {
    if(arr[i]%divisor==0) answer.push_back(arr[i]);
  }

  sort(answer.begin(), answer.end());

  if(answer.size()==0) answer.push_back(-1);
  return answer;
}
```


배열의 각 원소들이 주어진 `divisor`와 나누어 떨어지는지 확인한다.
마지막으로 정답 배열을 오름순으로 정렬해주어야 하기 때문에 `std::sort()`를 사용했다.