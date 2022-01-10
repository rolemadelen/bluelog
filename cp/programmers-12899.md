---
from: 'programmers'
level: 'easy2'
---

Level 2 [124 나라의 숫자](https://programmers.co.kr/learn/courses/30/lessons/12899)

시간 복잡도: O(log3(N))

```cpp
#include <bits/stdc++.h>
using namespace std;

string solution(int n) {
    string answer = "";

    while (n > 3)
    {
        if (n%3 == 0)
        {
            answer += "4";
            n = n / 3 - 1;
        }
        else
        {
            answer += (n%3)+'0';
            n /= 3;
        }

    }
    answer+=((n==3 ? 4 : n)+'0');
    
    reverse(answer.begin(), answer.end());
    return answer;
}
```