---
title: "1342. Number of Steps to Reduce a Number to Zero"
from: 'leetcode'
level: 'easy'
---

## C++

```cpp
class Solution {
public:
    int numberOfSteps (int num) {
        int cnt = 0;
        while (num > 0) {
            if (num&1 == 1) --num;
            else num >>= 1;
            
            ++cnt;
        }
        return cnt;
    }
};
```

## JavaScript
```js
var numberOfSteps  = function(num) {
    let cnt = 0;
    
    while (num > 0) {
        if ((num & 1) == 0) num = num / 2;
        else num -= 1;
        ++cnt;
    }
    
    return cnt;
};
```

## Ruby

```rb
# Runtime: 48 ms, faster than 84.85%
# Memory Usage: 209.6 MB, less than 70.71%
def number_of_steps (num)
    cnt = 0
    while (num > 0) do 
        if num%2 == 0
            num = num / 2
        else 
            num -= 1
        end
        
        cnt += 1
    end
    cnt
end

# usnig BITWISE OPERATOR
# Runtime: 40 ms, faster than 95.96%
# Memory Usage: 209.6 MB, less than 70.71%
def number_of_steps (num)
    cnt = 0
    while (num > 0) do 
        if num&1 == 0
            num = num >> 1 
        else 
            num -= 1
        end
        
        cnt += 1
    end
    cnt
end
```