---
title: "42840. 모의고사"
from: 'programmers'
level: 'easy'
---

Level 1 [모의고사](https://programmers.co.kr/learn/courses/30/lessons/42840)

시간 복잡도: **O(N)**

```cpp
#include <bits/stdc++.h>

using namespace std;

vector<int> solution(vector<int> answers) {
  vector<int> answer;
  string a ="12345";
  string b = "21232425";
  string c = "3311224455";

  vector<int> cnt(3, 0);

  for(int i=0; i<answers.size(); ++i) {
    if(a[i%a.size()]-'0' == answers[i]) ++cnt[0];   
    if(b[i%b.size()]-'0' == answers[i]) ++cnt[1];   
    if(c[i%c.size()]-'0' == answers[i]) ++cnt[2];   
  }

  int max = *max_element(cnt.begin(), cnt.end());
  if(cnt[0] == max) answer.push_back(1);
  if(cnt[1] == max) answer.push_back(2);
  if(cnt[2] == max) answer.push_back(3);
  return answer;
}
```


수포자 삼인방의 찍는 패턴(`'12345'`, `'21232425'`, `'3311224455'`)을 문자열로 저장해두고, 이를 시험 총 문제 만큼 반복하면서 확인.

마지막으로 `max_element`를 사용해서 세 명중 누가 제일 잘 찍었는지 확인.