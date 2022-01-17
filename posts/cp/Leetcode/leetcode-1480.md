---
title: "1480. Running Sum of 1d Array"
from: 'leetcode'
level: 'easy'
---

## C++

```cpp
/*
 * Runtime: 12 ms, faster than 13.10% 
 * Memory Usage: 8.9 MB, less than 98.70%
 */
class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        vector<int> result;
        for(int i=0; i<nums.size(); ++i)
        {
            int sum = 0;
            for(int j=0; j<i+1; ++j)
            {
                sum += nums[j];
            }
            result.push_back(sum);
        }
        return result;
    }
};

/*
 * Runtime: 4 ms, faster than 84.50% 
 * Memory Usage: 8.9 MB, less than 98.70%
*/
class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        int sum = 0;
        for(int i=0; i<nums.size(); ++i)
        {
            sum += nums[i];
        }
        
        int neg = nums[nums.size()-1];
        nums[nums.size()-1] = sum;
        for (int i=nums.size()-2; i>=0; --i)
        {
            int val = sum-neg;
            neg += nums[i];
            nums[i] = val;
        }
        return nums;
    }
};
```


## JavaScript
```js
/**
 * Runtime: 80 ms, faster than 66.97%
 * Memory Usage: 38.7 MB, less than 5.17%
 */
var runningSum = function(nums) {
    let sum = nums.reduce((a, b) => a + b, 0);
    let neg = nums[nums.length-1];
    nums[nums.length-1] = sum;
    
    for (let i=nums.length-2; i>=0; --i) {
        let val = sum - neg;
        neg += nums[i];
        nums[i] = val;
    }
    
    return nums;
};
```

## Ruby
```rb
=begin
 Runtime: 52 ms, faster than 72.86% 
 Memory Usage: 210.1 MB, less than 81.12%
=end
def running_sum(nums)
    sum = nums.sum
    nums << sum;
    
    (nums.size-2).downto(0) do |i|
        temp = nums[i]
        nums[i] = sum - nums[i];
        sum -= temp
    end
    
    nums.shift
    nums
end
```