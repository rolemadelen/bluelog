---
title: "42586. 기능개발"
from: 'programmers'
level: 'easy2'
---

Level 2 [기능개발](https://programmers.co.kr/learn/courses/30/lessons/42586)

Time complexity: O(n)

```cpp
#include <bits/stdc++.h>
using namespace std;

vector<int> solution(vector<int> pg, vector<int> spd) {
    vector<int> answer;
    if(pg.size()<1) return answer;
    int d = 1;
    int daysReq = ceil((100 - pg[0]));
    daysReq = (daysReq < spd[0]) ? 1 : ceil(daysReq/(double)(spd[0]));
    
    for(int i=1; i<pg.size(); ++i) {
        int s = spd[i];

        if(s*daysReq + pg[i] >= 100) {
            ++d;
            continue;
        } else {
            answer.push_back(d);
            daysReq = ceil((100 - pg[i]));
            daysReq = (daysReq < s) ? 1 : ceil(daysReq/(double)s);

            d = 1;
        }

    }
    answer.push_back(d);
    return answer;
}
```

1. Extra test cases
아래의 테스트케이스를 통과한다면 구현에 문제는 없을겁니다.
- [2, 2, 1, 2], [2, 2, 2, 98], [2, 2]
- [99, 99, 99, 99, 99], [99, 99, 99, 99, 99], [5]
- [1, 99], [99, 1], [2]
- [3, 2, 4, 2, 1], [1, 1, 1, 1, 1], [1, 3, 1]
- [20, 99, 93, 30, 55, 10], [5, 10, 1, 1, 30, 5], [3, 3]

2. 나눗셈을 할 때 소숫점이 되는 경우를 생각해보세요.