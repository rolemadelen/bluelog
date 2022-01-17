---
title: "12928. 약수의 합"
from: 'programmers'
level: 'easy'
---

[Lv.1 약수의 합](https://programmers.co.kr/learn/courses/30/lessons/12928)

시간 복잡도: **O(N)**


```cpp
#include <string>
#include <vector>
using namespace std;

int solution(int n) {
  int answer = 0;

  for(int i=1; i<=n; ++i)
    if(n%i==0) answer +=i;

  return answer;
}
```

1부터 N까지 돌면서 해당 숫자가 `N`가 나누어 떨어지면 약수가 되니 해당 값을 `answer`에 더한다.