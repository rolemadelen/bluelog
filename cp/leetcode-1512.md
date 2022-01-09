---
from: 'leetcode'
level: 'easy'
---

## C++

```cpp
/**
* Runtime: 4 ms, faster than 54.71%
* Memory Usage: 7.5 MB, less than 56.34%
*/
class Solution {
public:
    int numIdenticalPairs(vector<int>& nums) {
        int cnt = 0;
        for (int i=0; i<nums.size(); ++i)
        {
            for (int j=i+1; j<nums.size(); ++j)
            {
                if (nums[i] == nums[j]) ++cnt;
            }
        }
        
        return cnt;
    }
};
```

## JavaScript
```js
/**
 * Runtime: 80 ms, faster than 47.12%.
 * Memory Usage: 38.4 MB, less than 56.81%.
 */
var numIdenticalPairs = function(nums) {
    let cnt = 0;
    for(let i=0; i<nums.length; ++i) {
        for(let j=i+1; j<nums.length; ++j) {
            if (nums[i] == nums[j]) ++cnt;
        }
    }
    return cnt;
};
```

## Ruby
```rb
# Runtime: 48 ms, faster than 79.58%
# Memory Usage: 209.7 MB, less than 70.42%
def num_identical_pairs(nums)
    cnt = 0
    0.upto(nums.size-1) do |i|
        (i+1).upto(nums.size-1) do |j|
            if nums[i] == nums[j]
                cnt += 1                
            end
        end
    end
    cnt
end
```