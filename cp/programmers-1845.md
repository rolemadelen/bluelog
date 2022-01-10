---
from: 'programmers'
level: 'easy'
---

Level 1 [폰켓몬](https://programmers.co.kr/learn/courses/30/lessons/1845)

### 첫 번째 풀이

시간 복잡도: **O(n lgn)**

```cpp
#include <bits/stdc++.h>
using namespace std;

int solution(vector<int> nums)
{
  int answer = 0;
  sort(nums.begin(), nums.end());
  int choose = (nums.size()) >> 1;
  int types = 1;

  for(int i=1; i<nums.size(); ++i) {
    if(nums[i-1] != nums[i])
      ++types;
  }
  return (types < choose) ? types : choose;
}
```

O(nlgn)으로 구현되어 있는 `sort()` 함수를 사용하여 폰켓몬을 오름순으로 정렬한다. 그 다음, 폰켓몬의 종류(`types`)와 데려갈 N/2의 폰켓몬(`choose`)을/를 계산하고 둘 중 작은 값을 반환한다. 

### 두 번째 풀이

시간 복잡도: **O(n lgn)**


```cpp
#include <bits/stdc++.h>
using namespace std;

int solution(vector<int> nums)
{
    int answer = 0;
    set<int> s;
    for(int p : nums) s.insert(p);
    
    return min(s.size(), nums.size()/2);
}
```

`set`은 중복되는 값을 허용하지 않기 때문에 폰켓몬의 종류를 따로 계산하지 않아도된다. `set`에 최종 데이터가 폰켓몬의 총 종류이기 때문에 마지막에 `set`의 크기와 N/2를 비교해서 더 작은 값을 반환하면 된다.