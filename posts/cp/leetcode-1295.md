---
from: 'leetcode'
level: 'easy'
---

## C++

```cpp
class Solution {
  public:
    int findNumbers(vector<int>& nums) {
      int result = 0;

      for(int x : nums) 
      {
        int cnt = 0;
        while (x>0) {
          ++cnt;
          x /= 10;
        }

        result = (cnt & 1) ? result : result + 1;
      }

      return result;
    }
};
```

## JavaScript

```js
var findNumbers = function(nums) {
  let result = 0;

  nums.forEach(e => {
    if (e.toString().length % 2 == 0) ++result;
  });

  return result;
};
```

## Ruby

```rb

def find_numbers(nums)
  result =  0

  for x in nums do
    if x.to_s.length % 2 == 0
      result += 1
    end
  end

  result
end
```