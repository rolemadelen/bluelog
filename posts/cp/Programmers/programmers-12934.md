---
title: "12934. 정수 제곱근 판별"
from: 'programmers'
level: 'easy'
---

Level 1 [정수 제곱근 판별](https://programmers.co.kr/learn/courses/30/lessons/12934)

### 첫 번째 풀이
최대 입력이 `50000000000000`이기 때문에 이 숫자의 제곱근을 최대 반복횟수(`7071068`)로 정했다.
해당 숫자까지 반복하면서 두 수의 합이 `n`이 되는 수가 있는지 확인한다.

```cpp
#include <bits/stdc++.h>
using namespace std;

long long solution(long long n) {
  const int MAX = 7071068; // ceil(sqrt(50000000000000))
  long long ans = -1;

  for(long long i=1; i<=MAX; ++i) {
    if(i*i > n) break;

    if(i*i == n) {
      ans = (i+1)*(i+1);
      break;
    }
  }

  return ans;
}
```

### 두 번째 풀이

`sqrt()`함수를 사용하면 훨씬 더 간단히 풀 수 있다. 

```cpp
#include <bits/stdc++.h>
using namespace std;

long long solution(long long n) {
  long long a = sqrt(n);
  long long ans = (a*a == n) ? (a+1)*(a+1) : -1;
  return ans;
}
```