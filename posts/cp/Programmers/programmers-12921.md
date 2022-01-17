---
title: "12921. 소수 찾기"
from: 'programmers'
level: 'easy'
---

Level 1 [소수 찾기](https://programmers.co.kr/learn/courses/30/lessons/12921)

시간 복잡도: **O(N lg lgN)**

에라토스테네스의 체

```cpp
#include <bits/stdc++.h>
using namespace std;

int solution(int n) {
  vector<int> sieve(n+1, true);
  sieve[0] = sieve[1] = false;
  int cnt = 0;

  for(int i=2; i<=n; ++i) {
    if(!sieve[i]) continue;

    for(int j=i+i;j<=n;j+=i) {
      sieve[j] = false;
    }

    ++cnt;
  }

  return cnt;
}
```

아래와 같이 구하는 방법도 있다.

시간 복잡도: **O(N sqrt N)**

```cpp
#include <string>
#include <vector>

using namespace std;

bool isPrime(int n) {
    if(n<2) return 0;
    if(n<4) return 1;
    
    if((n&1)==0 || n%3==0) return  0;
    
    
    for(int i=5; i*i<=n; i+=6) 
        if(n%i==0 || n%(i+2)==0) return 0;
    return 1;
}
int solution(int n) {
    int answer = 1;
    if(n<2) return 0;
    if(n==2) return 1;
    for(int i=3; i<=n; i+=2) {
        if(isPrime(i)) ++answer;
    }

    return answer;
}
```
