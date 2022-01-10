---
from: 'programmers'
level: 'easy2'
---

# 조이스틱

[https://programmers.co.kr/learn/courses/30/lessons/42860](https://programmers.co.kr/learn/courses/30/lessons/42860)


## Approach
A에서 해당 문자까지의 거리를 구하고 값을 더한다.

## Attempt

```cpp
#include <bits/stdc++.h>
using namespace std;

int distance(char c) {
  if(c == 'N') return 13;
  if(c >='A' && c <= 'M') return c-'A';
  else return ('Z' - c) + 1;
}

int solution(string name) {
  int answer = 0;
  const int SIZE = name.size();
  for(int i=0; i<SIZE; ++i) {
    answer += distance(name[i]);
  }
  return answer;
}
```

## Issues 
문자를 변경할 때의 조작 횟수만 계산하고, 좌우로 움직일때의 횟수를 빼먹었다.

`BAAABBBB`와 같이 연속된 `A`의 경우는 쉽게 해결했지만, `BABBBBABA`와 같이 `A`가 떨어져 있는 경우에서 
애를 먹었고, 결국 다른 코드를 참조해서 해결했다 (아래 'reference' 참고).

## Solution

```cpp
#include <bits/stdc++.h>
using namespace std;

int distance(char c) {
  if(c >='A' && c <= 'N') return c - 'A';
  else return 'Z' - c + 1;
}

int solution(string name) {
  int answer = 0;
  const int SIZE = name.size();
  int moves = SIZE-1;

  // O(N + α)
  for(int i=0; i<SIZE; ++i) { // O(N)
    answer += distance(name[i]);

    int j = i+1;
    while(j < SIZE && name[j] == 'A') ++j; // +α

    int a = i;
    int b = SIZE - j;
    moves = min(moves, min(2*a + b, a + 2*b));
  }

  answer += moves;

  return answer;
}
```

## Time Complexity
O(N + α)  

## Space Complexity
O(1)

## Reference
  - [https://4z7l.github.io/2021/03/12/algorithms-prg-42860.html](https://4z7l.github.io/2021/03/12/algorithms-prg-42860.html)
