---
title: "68644. 두 개 뽑아서 더하기"
from: 'programmers'
level: 'easy'
---

Level 1 [두 개 뽑아서 더하기](https://programmers.co.kr/learn/courses/30/lessons/68644)

시간 복잡도: **O(N^2)** 

```cpp
#include <bits/stdc++.h>
using namespace std;

vector<int> solution(vector<int> numbers) {
  vector<int> answer;

  const int SIZE = numbers.size();
  for(int i=0; i<SIZE-1; ++i) {
    for(int j=i+1; j<SIZE; ++j)
      answer.push_back(numbers[i] + numbers[j]);
  }

  sort(answer.begin(), answer.end());
  auto it = unique(answer.begin(), answer.end());
  answer.erase(it, answer.end());
  return answer;
}
```

`7~11`번 라인에서 모든 값을 찾아 배열에 차곡차곡 쌓아줍니다 (사실 여기서 `set`을 사용해서 바로 중복을 제거해도 된다).

`13`번 라인에서 오름순으로 정렬을 한 다음, `14~15`번 라인에서 중복을 제거해준다.