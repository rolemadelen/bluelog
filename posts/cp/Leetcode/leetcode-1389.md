---
title: "1389. Create Target Array in the Given Order"
from: 'leetcode'
level: 'easy'
---

## C++

```cpp
/**
 * Runtime: 0 ms, faster than 100.00%
 * Memory Usage: 8.8 MB, less than 34.60%
 */
class Solution {
  public:
    vector<int> createTargetArray(vector<int>& nums, vector<int>& index) {
      vector<int> result;

      for (int i=0; i<index.size(); ++i)
      {
        auto it = result.begin();
        result.insert(it + index[i], nums[i]);
      }


      return result;
    }
};
```

## JavaScript
```js
/**
 * Runtime: 80 ms, faster than 47.00%
 * Memory Usage: 38.9 MB, less than 23.33%
 */
var createTargetArray = function(nums, index) {
  let result = []
  for(let i=0; i<index.length; ++i) {
    result.splice(index[i], 0, nums[i]);
  }

  return result;
};
```

## Ruby
```rb
# Runtime: 40 ms, faster than 90.00% 
# Memory Usage: 210 MB, less than 10.00% 
def create_target_array(nums, index)
  result = []
  for i in (0...index.size) do
    result.insert(index[i], nums[i]) 
  end

  result
end
```