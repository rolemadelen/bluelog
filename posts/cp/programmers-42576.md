---
from: 'programmers'
level: 'easy'
---

Level 1 [완주하지 못한 선수](https://programmers.co.kr/learn/courses/30/lessons/42576)

시간 복잡도: **O(N logN)**, N = number of participants

```cpp
#include <bits/stdc++.h>
using namespace std;

string solution(vector<string> participant, vector<string> completion) {
    map<string, int> p;
    for(string s : participant) ++(p[s]);
    for(string s : completion) ++(p[s]);
    
    auto it = p.begin();
    while(it != p.end()) {
        if(((it->second)&1)) return it->first;
        ++it;
    }
}
```

처음 시작할 때 선수를 카운트하고, 도착했을 때 다시 카운팅한다.
최종적으로 카운팅한 값이 홀수인 경우, 해당 선수는 도착을 하지 못한 선수임을 의미한다.
