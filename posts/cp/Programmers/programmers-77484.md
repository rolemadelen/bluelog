---
title: "77484. 로또의 최고 순위와 최저 순위"
from: 'programmers'
level: 'easy'
---

Level 1 [로또의 최고 순위와 최저 순위](https://programmers.co.kr/learn/courses/30/lessons/77484)

시간 복잡도: **O(36)**인데... O(1)이라고 하기는 애매하다..

```cpp
#include <bits/stdc++.h>
using namespace std;

vector<int> solution(vector<int> lottos, vector<int> win_nums) {
    int rank[] = {6, 6, 5, 4, 3, 2, 1};
    int score = 0;
    int lost = 0;
    
    for(int i=0; i<6; ++i) {
        if(lottos[i]==0) {
            ++lost; 
            continue;
        }
        
        for(int j=0; j<6; ++j) {
            if(lottos[i] == win_nums[j]) {
                ++score;
                break;
            }        
        }
    }
    
    vector<int> answer(2);
    answer[0] = rank[score+lost];
    answer[1] = rank[score];
    
    return answer;
}
```

보이지 않는 숫자가 뭐든 상관없이 현재 당첨된 개수가 최저 순위가 된다. 반대로
보이지 않는 숫자가 전부 당첨일 수도 있으니 `0`의 개수를 구해서 현재 당첨된 숫자에 더해주면 된다.
