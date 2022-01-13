---
from: 'programmers'
level: 'easy'
---

Level 1 [소수 만들기](https://programmers.co.kr/learn/courses/30/lessons/12977)

시간 복잡도: O(n^2*(n sqrt(x))), x = 숫자 3개의 합 => **O(n^3)**
 
```cpp
#include <bits/stdc++.h>
using namespace std;

int solution(vector<int> nums) {
  int answer = 0;

  for(int i=0; i<nums.size()-2; ++i) {
    for(int j=i+1; j<nums.size()-1; ++j) {
      for(int k=j+1; k<nums.size(); ++k) {
        int s = nums[i]+nums[j]+nums[k];
        int t = sqrt(s);
        
        for(int m=2; m<=t; ++m) {
          if(s%m == 0) {
            s = 51;
            break;
          }
        }
        if(s!=51) ++answer;
      }
    }
  }

  return answer;
}
```

입력 최대 개수가 50이하이기 때문에 브루트포스를 사용해도 시간은 충분하다.