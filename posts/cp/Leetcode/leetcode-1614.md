---
title: "1614. Maximum Nesting Depth of the Parentheses"
from: 'leetcode'
level: 'easy'
---

## C++

```cpp
/**
 * Runtime: 0 ms, faster than 100.00%
 * Memory Usage: 6.5 MB, less than 22.49% 
 */
class Solution {
  public:
    int maxDepth(string s) {
      int max = 0;
      int cnt = 0;

      for(int i=0; i<s.size(); ++i)
      {
        if (s[i] == '(') 
        {
          ++cnt;
        }
        else if (s[i] == ')')
        {
          --cnt;
        }

        if (cnt > max) 
          max = cnt;
      }

      return max;
    }
};
```

## JavaScript
```js
/**
 * Runtime: 88 ms, faster than 23.24%
 * Memory Usage: 38.4 MB, less than 92.83%
 */
var maxDepth = function(s) {
  let cnt = 0
  let max = 0

  for (let i=0; i<s.length; ++i) {
    if (s[i] == '(') ++cnt;
    else if(s[i] == ')') --cnt;

    max = (cnt > max) ? cnt : max;
  }

  return max;
};
```

## Ruby
```rb
# Runtime: 48 ms, faster than 94.92%
# Memory Usage: 209.9 MB, less than 64.41%
def max_depth(s)
  max = 0
  cnt = 0

  for i in (0...s.size) do 
    if s[i] == '('
      cnt += 1
    elsif s[i] == ')'
      cnt -= 1
    end

    max = (cnt > max) ? cnt : max
  end
  max
end
```