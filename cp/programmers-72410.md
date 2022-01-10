---
from: 'programmers'
level: 'easy'
---

Level 1 [신규 아이디 추천](https://programmers.co.kr/learn/courses/30/lessons/72410)

시간 복잡도: **O(N)**

```cpp
#include <bits/stdc++.h>

using namespace std;

string solution(string new_id) {
  string x = "";
  const int SIZE = new_id.size();
  
  for(int i=0; i<SIZE; ++i) {
    char c = new_id[i];
    if(c >= 65 && c <= 90) x += c+32;
    else if(isalnum(c) || c=='-' || c=='_') x += c;  
    else if (c=='.') {
      if(x[x.size()-1] != '.') x += c;
    }
  }

  if(x[0]=='.') x = x.substr(1);
  if(x[x.size()-1]=='.') x = x.substr(0, x.size()-1);
  if(x.size() > 15) x = x.substr(0, (x[14]=='.') ?14: 15);
  if(x[x.size()-1]=='.') x = x.substr(0, x.size()-1);
  if(x.size()==0) x+="a";
  while(x.size() <= 2) x+=x[x.size()-1];

  return x;
}
```

아래의 순서대로 프로그램을 작성하면 된다. 다만 하나하나 따로 구현하면 코드가 너무 길어지기 때문에 나는 1~3단계는 하나로 합쳤다.

위 코드 17~22번 줄이, 4~7단계에 해당한다.


- 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
- 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
- 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
- 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
- 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
- 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다. 
  - 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
- 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.