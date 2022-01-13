---
from: 'programmers'
level: 'easy2'
---

# 더 맵게

[https://programmers.co.kr/learn/courses/30/lessons/42626](https://programmers.co.kr/learn/courses/30/lessons/42626)

## Approach
처음엔 벡터를 사용해서 리버스 정렬 한 다음 뒤에서 부터 스코빌 값을 확인했다.
값이 `K`보다 작으면 뒤에 2개의 값을 가지고 계산, 그리고 반복.

(지금 쓰면서 느낀건데 왜 리버스 정렬을 했지..? 작성할 때는 `sort`가 내림정렬이라고 착각했나보다)

## Attempt

```cpp
#include <bits/stdc++.h>
using namespace std;

int solution(vector<int> scoville, int K) {
    int answer = 0;
    sort(scoville.rbegin(), scoville.rend());
    
    for(int x : scoville) cout << x << ' ';
    cout << endl;
    
    while(!scoville.empty() && scoville[scoville.size() - 1] < K) {
        if(scoville.size() == 1) return -1;
        
        int last = scoville.back();
        scoville.pop_back();
        scoville[scoville.size()-1] = last + scoville[scoville.size()-1]*2;
        ++answer;
    }
    return answer;
}
```

## Issues 
로직이 틀렸다. 두 개의 수를 더해서 다시 집어넣으면 정렬이 흐트러질수가 있는데 이를 깜빡했다.
재정렬을 해주어야 한다.

하지만 heap문제이기도 하니, 연결리스트가 아닌 `priority queue`를 사용하기로 했다.

## Solution

```cpp
#include <bits/stdc++.h>
using namespace std;

int solution(vector<int> scoville, int K) {
    int answer = 0;
    priority_queue<int, vector<int>, greater<int>> q;
    for(int x : scoville) q.push(x);
        
    while(true) {
        if(q.size() == 1 && q.top() < K) return -1;
        if(q.top() >= K) break;
        
        if(q.top() < K) {
            int first = q.top();
            q.pop();
            int second = q.top();
            q.pop();
            
            q.push(first + second*2);
        }
        ++answer;
    }
    return answer;
}
```

## Time Complexity
O(N * log N)

## Space Complexity
O(N)