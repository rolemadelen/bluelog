---
title: "17681. 비밀지도"
from: 'programmers'
level: 'easy'
---

[비밀지도](https://programmers.co.kr/learn/courses/30/lessons/17681)

Time Complexity: O(N^2)


```cpp
#include <string>
#include <vector>

using namespace std;

vector<string> solution(int n, vector<int> arr1, vector<int> arr2) {
    vector<string> answer;
    
    vector<int> binary(n);
    
    for(int i=0; i<n; ++i) {
        binary[i] = arr1[i] | arr2[i];
    }
    
    for(int x : binary) {
        string m = "";
        for(int i=0; i<n; ++i) {
            m = ((x&1 == 1) ? '#' : ' ') + m;
            x >>= 1;
        }
        answer.push_back(m);
    }
    
    return answer;
}
```
