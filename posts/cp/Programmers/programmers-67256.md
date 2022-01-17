---
title: "67256. 키패드 누르기"
from: 'programmers'
level: 'easy'
---

Level 1 [키패드 누르기](https://programmers.co.kr/learn/courses/30/lessons/67256)

시간 복잡도: **O(N)**

```cpp
#include <bits/stdc++.h>

using namespace std;

string solution(vector<int> numbers, string hand) {
  string answer = "";
  char _hand = hand[0]-32;
  char numpad[4][3] = { {'1', '2', '3'}, 
                    {'4', '5', '6'}, 
                    {'7', '8', '9'},
                    { '*', '0', '#'}};  
  int l1 = 3, l2 = 0;
  int r1 = 3, r2 = 2;

  for(int n : numbers) {
    if(n==0) n = 11;
    int x1 = ((n-1)/3);
    int x2 = (n-1)%3; 
    int L = abs(x2-l2) + abs(x1-l1);
    int R = abs(x2-r2) + abs(x1-r1);

    if(n==1 || n==4 || n==7) {
      answer += 'L';
      l1 = x1;
      l2 = x2;
    } else if(n==3 || n==6 || n==9) {
      answer += 'R';
      r1 = x1;
      r2 = x2;
    } else { 
      if(L == R) {
        answer += _hand;
        if(_hand=='R') r1=x1, r2=x2;
        else l1=x1, l2=x2;
      }else if(L < R) {
        answer += 'L';
        l1 = x1;
        l2 = x2;
      } else {
        answer += 'R';
        r1 = x1;
        r2 = x2;
      }
    }
  }

  return answer;
}
```

2차원 그래프에서 거리를 구하는 것처럼, 왼손과 오른손과 숫자의 거리를 구해서 더 가까운 쪽의 손을 사용하도록 했다.