---
from: 'leetcode'
level: 'easy'
---

## C++

```cpp
/*
 * Runtime: 48 ms, faster than 39.04%
 * Memory Usage: 10.4 MB, less than 74.17%
 */

class Solution {
  public:
    vector<int> smallerNumbersThanCurrent(vector<int>& nums) {
      vector<int> result(nums.size());

      for (int i=0; i<nums.size(); ++i)
      {
        int cnt = 0;
        for(int j=0; j<nums.size(); ++j) 
        {
          if (i != j) 
          {
            if (nums[i] > nums[j])
              ++cnt;
          }
        }
        result[i] = cnt;
      }

      return result;
    }
};

/*
 * Runtime: 8 ms, faster than 90.45% 
 * Memory Usage: 10.5 MB, less than 52.49%
 */

class Solution {
  public:
    vector<int> smallerNumbersThanCurrent(vector<int>& nums) {
      vector<int> result(nums);
      int table[101] = {0};

      sort(result.begin(), result.end());

      int cnt = 1;
      table[result[0]] = 0;
      for(int i=1; i<result.size(); ++i) 
      {
        if (result[i-1] == result[i]) 
          table[result[i]] = table[result[i-1]];
        else 
          table[result[i]] = cnt;
        ++cnt;
      }


      for (int i=0; i<nums.size(); ++i) 
        result[i] = table[nums[i]];

      return result;
    }
};
```

## JavaScript
```js
/**
 * Runtime: 96 ms, faster than 68.18%
 * Memory Usage: 41 MB, less than 13.65%
 */
var smallerNumbersThanCurrent = function(nums) {
  let temp = [...nums];
  temp = temp.sort((a, b) => {return a-b;});
  let table = new Array(101).fill(0);
  let cnt = 1;
  table[nums[0]] = 0;
  for(let i=1; i<nums.length; ++i) {
    table[temp[i]] = ((temp[i-1] == temp[i]) ? table[temp[i-1]] : cnt);
    ++cnt;
  }

  for(let i=0; i<nums.length; ++i) {
    temp[i] = table[nums[i]];
  }

  return temp;
};
```

## Ruby
```rb
# Runtime: 72 ms, faster than 74.00%
# Memory Usage: 210.5 MB, less than 45.00%
def smaller_numbers_than_current(nums)
  temp = nums.sort;
  table = [0]*101;

  cnt = 1
  1.upto(temp.size-1) do |i|
    table[temp[i]] = ((temp[i-1] == temp[i]) ? table[temp[i-1]] : cnt)
    cnt += 1
  end

  0.upto(nums.size - 1) do |i|
    temp[i] = table[nums[i]]
  end

  temp
end
```