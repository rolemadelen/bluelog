---
from: 'programmers'
level: 'easy'
---

Level 1 [크레인 인형뽑기 게임](https://programmers.co.kr/learn/courses/30/lessons/64061)

시간 복잡도: O(NM), `N = number of moves`, `M = width of the Board`

```cpp
#include <bits/stdc++.h>
using namespace std;

int solution(vector<vector<int>> board, vector<int> moves) {
  int answer = 0;
  const int D = board.size();
  stack<int> stk;

  for(int j : moves) {
    for(int i=0; i<D; ++i) {
      if(board[i][j-1] > 0) {
        if(stk.size()) {
          int temp = stk.top();
          if(temp == board[i][j-1]) {
            while(temp == board[i][j-1]) {
              ++answer;
              stk.pop();
              if(!stk.empty()) temp = stk.top();
              else break;
            }
          } else {
            stk.push(board[i][j-1]);
          }
        } else {
          stk.push(board[i][j-1]);
        }
        board[i][j-1] = 0;
        break;
      }            
    }    
  }

  return answer*2;
}
```

인형들을 스택에 하나씩 쌓으면서 동일한 인형이 있는지 확인. 연속으로 `1 - 2 - 2 - 1` 
이런식으로 될 수 있지 않을까 해서 중간에 `while`문을 사용했는데, 지금 생각해보면 바로바로 제거해주니까 굳이 필요는 없었다는 걸 느끼고 있다.


실제로 아래처럼 `while`문만 지우고 제출했더니 `AC`받았다.

```cpp
if(temp == board[i][j-1]) {
  ++answer;
  stk.pop();
}
```