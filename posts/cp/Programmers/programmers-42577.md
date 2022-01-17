---
title: "42577. 전화번호 목록"
from: 'programmers'
level: 'easy2'
---

[전화번호 목록](https://programmers.co.kr/learn/courses/30/lessons/42577)

## Solution

```cpp
#include <bits/stdc++.h>
using namespace std;

bool solution(vector<string> pb) {
    sort(pb.begin(), pb.end());
    const int SIZE = pb.size();
    
    for(int i=0; i<SIZE-1; ++i) {
        if(pb[i+1][0] != pb[i][0]) continue;
        if(pb[i+1].find(pb[i]) != string::npos)
            return false;
    }
    
    return true;
}
```

사전 순 정렬 후, 인접한 문자열이 접두사인지 확인.

## Time Complexity
O(N log N):  `sort` 함수

## Space Complexity
O(1)
