---
title: "12933. 정수 내림차순으로 배치하기"
from: 'programmers'
level: 'easy'
---

Level 1 [정수 내림차순으로 배치하기](https://programmers.co.kr/learn/courses/30/lessons/12933)

시간 복잡도: **O(N)**

```cpp
#include <bits/stdc++.h>
using namespace std;

long long solution(long long n) {
  long long answer = 0;
  string s;
  stringstream ss;
  ss << n;
  ss >> s;
  sort(s.rbegin(), s.rend());
  answer = stoll(s);
  return answer;
}
```

---

숫자를 문자열로 변환한 다음 문자열을 정렬한 다음, 다시 숫자로 변환하는 방식.


`std::stream`에 있는 `stringstream`을 사용해서 숫자를 문자열로 변환했다.

```cpp
string s;
stringstream ss;
ss << n;  // 숫자를 집어넣고
ss >> s; // 문자열로 꺼내기
```

그런 다음 내장 함수 `std::sort`를 사용해서 정렬하는데, 내림정렬이기 때문에 뒤에서부터 시작하도록 `rbegin` (reverse begien)을 사용했다.

```cpp
sort(s.rbegin(), s.rend())
```

마지막으로 문자열을 숫자로 변환한다.

```cpp
// long long answer = string_to_long_long(s)
answer = stoll(s)
```