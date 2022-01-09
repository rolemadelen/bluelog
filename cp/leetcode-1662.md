---
from: 'leetcode'
level: 'easy'
---

## C++

```cpp
/**
 * Runtime: 4 ms, faster than 66.67%
 * Memory Usage: 11.8 MB, less than 33.33%
 */
class Solution {
  public:
    bool arrayStringsAreEqual(vector<string>& word1, vector<string>& word2) {
      string str1 = "";
      string str2 = "";

      for (string s : word1) 
        str1 += s;

      for (string s : word2) 
        str2 += s;

      if (str1.size() != str2.size()) 
        return false;
      else
      {    
        for (int i=0; i<str1.size(); ++i)
        {
          if (str1[i] != str2[i])
            return false;
        }
      }

      return true;
    }
};
```

## JavaScript
```js
/**
 * Runtime: 84 ms, faster than 100.00%
 * Memory Usage: 38.8 MB, less than 100.00%
 */
var arrayStringsAreEqual = function(word1, word2) {
  let str1 = word1.join('');
  let str2 = word2.join('');

  if (str1.length != str2.length) {
    return false;
  }

  for (let i=0; i<str1.length; ++i) {
    if (str1[i] != str2[i])
      return false;
  }

  return true;
};
```

## Ruby
```rb
# Runtime: 48 ms, faster than 100.00%
# Memory Usage: 210 MB, less than 100.00%
def array_strings_are_equal(word1, word2)
  str1 = word1.join
  str2 = word2.join

  return false if str1.size != str2.size

  for i in (0...str1.size) do
    return false if str1[i] != str2[i] 
  end

  true
end
```