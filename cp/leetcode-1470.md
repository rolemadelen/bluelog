---
from: 'leetcode'
level: 'easy'
---

## C++

```cpp
/*
 * Runtime: 8 ms, faster than 89.28% of C++ online submissions for Shuffle the Array.
 * Memory Usage: 10.3 MB, less than 100.00% of C++ online submissions for Shuffle the Array.
*/

class Solution {
public:
    vector<int> shuffle(vector<int>& nums, int n) {
        vector<int> result;
        
        for (int i=0; i<n; ++i)
        {
            result.push_back(nums[i]);
            result.push_back(nums[n+i]);
        }
        
        return result;
    }
};
```

## JavaScript

```js
/**
 * Runtime: 92 ms, faster than 35.85% of JavaScript online submissions for Shuffle the Array.
 * Memory Usage: 40.7 MB, less than 5.02% of JavaScript online submissions for Shuffle the Array.
 */
var shuffle = function(nums, n) {
    let result = [];
    
    for(let i=0; i<n; ++i) {
        result.push(nums[i]);
        result.push(nums[n+i]);
    }
    
    return result;
};
```

## Ruby
```rb
# Runtime: 48 ms, faster than 89.60% of Ruby online submissions for Shuffle the Array.
# Memory Usage: 210.7 MB, less than 61.85% 

def shuffle(nums, n)
    result = []
    
    1.upto(n) do |i|
        result << nums[i-1];
        result << nums[n+(i-1)]
    end
    result
end
```