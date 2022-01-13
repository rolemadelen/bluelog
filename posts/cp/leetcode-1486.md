---
from: 'leetcode'
level: 'easy'
---

## C++

```cpp
/**
 * Runtime: 0 ms, faster than 100.00%
 * Memory Usage: 6.1 MB
 */
class Solution {
  public:
    int xorOperation(int n, int start) {
      int result = start;
      for(int i=1; i<n; ++i) 
      {
        result = result ^ (start + 2*i);
      }

      return result;
    }
};
```

## JavaScript
```js
/**
 * Runtime: 60 ms, faster than 100.00%
 * Memory Usage: 38.2 MB, less than 83.71%
 */
var xorOperation = function(n, start) {
  let result = start;

  for (let i=1; i<n; ++i) {
    result = result ^ (start + 2*i);
  }

  return result;
};
```

## Ruby
```rb
# Runtime: 56 ms, faster than 37.50%
# Memory Usage: 210 MB, less than 6.25%
def xor_operation(n, start)
  result = start
  for i in (1...n) do 
    result = result ^ (start + 2*i) 
  end

  result
end
```