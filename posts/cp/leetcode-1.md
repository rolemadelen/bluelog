---
from: 'leetcode'
level: 'easy'
---

# 1. Two Sum

[https://leetcode.com/problems/two-sum/](https://leetcode.com/problems/two-sum/)

## Approach
As we iterate through `nums`, check if we have a number for `target-number` in the list.
If we do have that number in the list and that number is not the one itself, then we've found
two numbers that add up to `target`.

## Solution
```cpp
class Solution {
  public:
    vector<int> twoSum(vector<int>& nums, int target) {
      vector<int> ans;
      unordered_map<int, int> hashtable;

      for(int i=0; i<nums.size(); ++i) {
        auto it = hashtable.find(target-nums[i]);
        if(it == hashtable.end()) {
          hashtable[nums[i]] = i;
        }
        else {
          ans.push_back(i);
          ans.push_back(it->second);
          break;
        }
      }

      return ans;
    }
};
```

## Time Complexity
`find()` is O(n) worst case but it's O(1) in average. So the total time complexity should be O(N).. 

## Space Complexity
O(N)
