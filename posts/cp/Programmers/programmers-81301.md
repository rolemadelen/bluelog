---
title: "81301. 숫자 문자열과 영단어"
from: 'programmers'
level: 'easy'
---

Level 1 [숫자 문자열과 영단어](https://programmers.co.kr/learn/courses/30/lessons/81301)

시간 복잡도: O(N), N = length of a string

```cpp
#include <bits/stdc++.h>
using namespace std;

int solution(string s) {
    const int SIZE = s.size();
    
    string n = "";
    int answer;
    
    for(int i=0; i<SIZE; ++i) {
        switch(s[i]) {
            case 'z': n += '0'; i+=3; break;
            case 'o': n += '1'; i+=2; break;
            case 'e': n += '8'; i+=4; break;
            case 'n': n += '9'; i+=3; break;
            case 't': {
                bool t = s[i+1] == 'w';
                n += (t ? '2' : '3');
                i += (t ? 2 : 4);
                break;
            }
            case 'f': {
                bool t = s[i+1] == 'o';
                n += (t ? '4' : '5');
                i += 3;
                break;
            }
            case 's': {
                bool t = s[i+1] == 'i';
                n += (t ? '6' : '7');
                i += (t ? 2 : 4);
                break;
            }
            default: 
                n += s[i];
        }
    }
    
    stringstream ss;
    ss << n;
    ss >> answer;
    return answer;
}
```