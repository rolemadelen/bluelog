---
from: 'programmers'
level: 'easy'
---

Level 1[다트 게임](https://programmers.co.kr/learn/courses/30/lessons/17682)

시간 복잡도: **O(N)**, N = `len(str)`

```cpp
#include <bits/stdc++.h>
using namespace std;

int solution(string dartResult) {
  stack<int> s;
  string str = dartResult;
  const int SIZE = str.size();

  for(int i=0; i<SIZE; ++i) {
    if(isdigit(str[i]) && isdigit(str[i+1])) {
      s.push(10);
      ++i;
    } 
    else if (isdigit(str[i])) {
      s.push(str[i]-'0');
    } 
    else if(isalpha(str[i])) {
      int pts = s.top(); s.pop();
      if(str[i]=='D') pts *= pts;
      if(str[i]=='T') pts *= pts * pts;
      s.push(pts);
    } 
    else if(str[i]=='*') {
      int curr = s.top(); s.pop();
      curr *= 2;
      if(s.empty()) {
        s.push(curr);
        continue;
      }
      int prev = s.top(); s.pop();
      prev *= 2;
      s.push(prev);
      s.push(curr);
    } 
    else if(str[i]=='#') {
      int pts = s.top(); s.pop();
      s.push(pts*-1);
    }
  }

  int sum = 0;
  while(!s.empty()) {
    sum += s.top();
    s.pop();
  }
  return sum;
}
```

`스타상(*)`때문에 이전 점수도 저장을 하고 있어야 하기 때문에 스택을 사용했다. 스택을 사용해서 모든 값을 저장하고, 마지막에 스택에 남아있는 점수들을 전부 더해주었다.

카카오톡 측의 문제해설은 [여기](https://tech.kakao.com/2017/09/27/kakao-blind-recruitment-round-1/)를 참고..