---
title: "12901. 2016년"
from: 'programmers'
level: 'easy'
---

Level 1 [2016년](https://programmers.co.kr/learn/courses/30/lessons/12901)

시간 복잡도: **O(M)**, M = Month (1~12)

```cpp
#include <string>
#include <vector>

using namespace std;

string solution(int a, int b) {
  int days[] = {31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
  string day[] = {"THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"};
  int nDays = 0;

  for(int i=0; i<a-1; ++i) nDays += days[i];
  nDays += b;

  return day[nDays%7];
}
```

1월 1일이 월요일이 아닌 목요일이라고 했기 때문에 배열을 `THU`에서 시작했다. 만약 `MON`부터 시작을 했다면 마지막에 `+3`의 인덱스를 반환해주면 된다.