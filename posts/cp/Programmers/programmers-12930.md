---
title: "12930. 이상한 문자 만들기"
from: 'programmers'
level: 'easy'
---

Level 1 [이상한 문자 만들기](https://programmers.co.kr/learn/courses/30/lessons/12930)

시간 복잡도: **O(N)**

```cpp
#include <bits/stdc++.h>

using namespace std;

string solution(string s) {
  string ret="";
  int index=0;
  const  int SIZE = s.size();

  for(int i=0; i<SIZE; ++i,++index) {
    if(s[i]==' ') index=-1;
    if((index&1) == 0) ret += toupper(s[i]);
    else ret += tolower(s[i]);
  }

  return ret;
}
```

단순히 문자열의 인덱스만을 보면 안되고, 단어를 공백을 기준으로 분리한 다음, 짝수 위치에 있는 단어는 대문자로 만들어야한다.


`my name is`라는 문자열이 있다면, 아래와 같은 과정을 거쳐 `My Name Is`라는 결과가 나온다.

```text
[0][1]
 m  y   => My

[0][1][2][3]
 n  a  m  e   => NaMe

[0][1]
 i  s   => Is

==> My NaMe Is
```