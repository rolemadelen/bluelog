---
title: "1313. Decompress Run-Length Encoded List"
from: 'leetcode'
level: 'easy'
---

## C++

```cpp
class Solution {
  public:
    vector<int> decompressRLElist(vector<int>& nums) {
      vector<int> result;
      for(int i=0; i<nums.size(); i+=2) 
      {
        int freq = nums[i];
        int val = nums[i+1];

        for(int j=0; j<freq; ++j)
        {
          result.push_back(val);
        }
      }
      return result;
    }
};
```

## JavaScript
```js
var decompressRLElist = function(nums) {
  let result = []

  for (let i=0; i<nums.length; i+=2) {
    let f = nums[i];
    let v = nums[i+1];

    for (let j=0; j<f; ++j) {
      result.push(v);
    }
  }

  return result;
};
```

## Ruby

```rb
def decompress_rl_elist(nums)
    result = []
    
    for i in (0...nums.size()).step(2) do
        f = nums[i]
        v = nums[i+1]
        
        1.upto(f) do
            result << v 
        end
    end
    
    result
end
```