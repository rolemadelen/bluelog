---
title: "12940. 최대공약수와 최소공배수"
from: 'programmers'
level: 'easy'
---

Level 1 [최대공약수와 최소공배수](https://programmers.co.kr/learn/courses/30/lessons/12940)

시간 복잡도: **O(log(A+B))**

```cpp
#include <bits/stdc++.h>
using namespace std;

// euclidean algorithm by division
int gcd(int a, int b)
{
  if (a == 0) return b;
  return gcd(b % a, a);
}

// least common multiple
int lcm(int a, int b) {
  return (a*b)/gcd(a, b);
}

vector<int> solution(int n, int m) {
  vector<int> answer;
  answer.push_back(gcd(n,m));
  answer.push_back(lcm(n,m));
  return answer;
}
```

---

최대공약수(greatest common denominator)는 유클리드 호제법(Euclidean algorithm)을 사용했습니다.

```cpp
int gcd(int a, int b)
{
  if (a == 0) return b;
  return gcd(b % a, a);
}
```

최대공약수를 알면, 최소공배수(least common factor)도 바로 구할 수 있습니다.

```cpp
int lcm(int a, int b) {
  return (a*b)/gcd(a, b);
}
```