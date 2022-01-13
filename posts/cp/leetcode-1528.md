---
from: 'leetcode'
level: 'easy'
---

## C++

```cpp
/**
 * Runtime: 8 ms, faster than 94.80% 
 * Memory Usage: 15.4 MB, less than 63.23%
 */
class Solution {
public:
    string restoreString(string s, vector<int>& indices) {
        string result (indices.size(), 'a');
        int j=0;
        for(int i : indices) 
        {
            result[i] = s[j++];
        }
        
        return result;
    }
};
```

## JavaScript
```js
/**
 * Runtime: 88 ms, faster than 73.88%
 * Memory Usage: 39.2 MB, less than 79.04%
 */
var restoreString = function(s, indices) {
    let result = new Array(indices.length);
    let j = 0;
    indices.forEach(i => {
        result[i] = s[j];
        j+=1
    })
    
    return result.join('');
};
```

## Ruby
```rb
# Runtime: 68 ms, faster than 41.18%
# Memory Usage: 210.4 MB, less than 36.97%
def restore_string(s, indices)
    result = 'a' * indices.size
    j = 0
    indices.each do |i|
        result[i] = s[j] 
        j += 1
    end
    
    return result
end
```