---
from: 'programmers'
level: 'easy'
---

Level 1 [K번째 수](https://programmers.co.kr/learn/courses/30/lessons/42748)

시간 복잡도: **O(T * n lgn)**, T = 테스트 케이스 (commands)

```cpp
#include <bits/stdc++.h>

using namespace std;

vector<int> solution(vector<int> array, vector<vector<int>> commands) {
    vector<int> answer;
    for(int i=0; i<commands.size(); ++i) {
        vector<int> c = commands[i];
        vector<int> temp;
        for(int i=c[0]; i<=c[1]; ++i) temp.push_back(array[i-1]);
        sort(temp.begin(), temp.end());
        answer.push_back(temp[c[2]-1]);
    }
    return answer;
}
```

원래는 `sort()` 에서 시작점과 끝을 지정해서 구간만 정렬 한 다음 거기서 바로 `k`번째를 구할려고 했는데 문법이 생각이 안나서 위처럼 풀었다. 그리고 다른 사람의 풀이를 보았는데,,, 이거였다.

```cpp
for(int i = 0; i < commands.size(); i++) {
    temp = array;
    sort(temp.begin() + commands[i][0] - 1, temp.begin() + commands[i][1]);
    answer.push_back(temp[commands[i][0] + commands[i][2]-2]);
}
```