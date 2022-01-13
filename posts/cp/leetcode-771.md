---
from: 'leetcode'
level: 'easy'
---

## C++

```cpp
class Solution {
public:
    int numJewelsInStones(string J, string S) {
        int cnt = 0;
        for(int i=0; S[i]; ++i) 
        {
            for(int j=0; j<J.size(); ++j) 
            {
                if(S[i] == J[j]) ++cnt;
            }
        }
        
        return cnt;
    }
};
```

## JavaScript
```js
var numJewelsInStones = function(J, S) {
    let cnt = 0;
    S = S.split('');
    S.forEach(c => {
        (J.includes(c)) ? cnt += 1 : cnt;
    })
    
    return cnt;
};
```

## Ruby
```rb
def num_jewels_in_stones(j, s)
    cnt = 0
    s = s.split('')
    for c in s do
        if j.include?(c) then cnt += 1 end
    end
    cnt
end
```