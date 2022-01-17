---
title: "42587. 프린터"
from: 'programmers'
level: 'easy2'
---

Level 2 [프린터](https://programmers.co.kr/learn/courses/30/lessons/42587)

## Solution

```cpp
#include <bits/stdc++.h>
using namespace std;

int solution(vector<int> priorities, int location) {
    deque<pair<int, int>> dq; // (val, 0-based location)
    vector<pair<int, int>> order; // (0-based location, ANSWER)

    for(int i=0; i<priorities.size(); ++i)  // O(n) 
        dq.push_back(make_pair(priorities[i],i));
    
    while(!dq.empty()) {    // O(1) + O(n) + O(1) => O(n)  
        if(dq.size() == 1) {    // O(1)
            order.push_back(dq.front());
            break;
        }
        
        bool shouldPop = true;
        auto x = dq[0];
        for(int i=1; i<dq.size(); ++i) {    // O(n)
            if(x.first < (dq[i]).first) {   // O(1)
                dq.push_back(x);
                dq.pop_front();
                shouldPop = false;
                break;
            }
        }
        
        if(shouldPop) { // O(1)
            order.push_back(x);
            dq.pop_front();
        }
    }
    
    int i=0;
    for(auto it = order.begin(); it != order.end(); ++it, ++i) {    // O(n)
        if(it->second == location) return i+1;
    }
    
    return -1;
}
```

## Time Complexity
- O(N^2).
  - 예를들어 `[1, 2, 3, 4, 5]`와 같은 최악의 경우 연산횟수는 `1 + 2 + ... + n-1 + n`이 된다. 이는 `n(n+1)/2` 와 같기 때문에 `n^2`가 된다.

## Space Complexity
- O(N)
  - 리스트 속 데이터의 최대갯수는 `n+1`개 이기 때문에 `N` 그대로.
  - `pair`를 썼지만 이는 `O(2N)`이기 때문에 결국 `O(N)`이 된다 ([ref](https://stackoverflow.com/questions/56134826/space-complexity-of-an-array-of-pairs)).

---

## Other solution

```cpp
#include <bits/stdc++.h>
using namespace std;
#define me(a,b) max_element((a), (b))

int solution(vector<int> p, int L) {
    int answer = 0;
    int max = *me(p.begin(), p.end());
    
    while (true)
    {
        for (int i = 0; i < p.size(); ++i)
        {
            if (p[i] == max)
            {
                ++answer;
                if (i == L) return answer;

                p[i] = 0;
                max = *me(p.begin(), p.end());
            }
        }
    }
}
```

I could've used `max_element()`
