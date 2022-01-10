---
from: 'leetcode'
level: 'easy'
---

## C++

```cpp
/*
 * Runtime: 4 ms
 * Faster than 81.66%
 * Memory Usage: 9.3 MB, less than 100%
 * */

class Solution {
public:
    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
        vector<bool> result;
        int _max = -1;
        for(int i=0; i<candies.size(); ++i)
            if (candies[i] > _max) _max = candies[i];
        
        for(int i=0; i<candies.size(); ++i)
            if (candies[i] + extraCandies >= _max) result.push_back(true);
            else result.push_back(false);
        
        return result;
    }
};
```

## JavaScript

```js
/**
 * Runtime: 76 ms, faster than 84.03% 
 * Memory Usage: 38.7 MB, less than 7.03%
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies);
    let result = [];
    
    for (let i=0; i<candies.length; ++i)
        if (candies[i] + extraCandies >= max)
            result.push(true);
        else
            result.push(false);
    return result;
};

/**
 * Runtime: 80 ms, faster than 62.62%
 * Memory Usage: 38.9 MB, less than 7.03%
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies);
    let result = [];
    
    candies.forEach(e => {
        result.push(((e + extraCandies) >= max) ? true : false);
    })
    
    return result;
};
```

## Ruby

```rb
# Runtime 56ms
# Faster than 52.02%
# Memory Usage: 210MB, less than 76.88%
def kids_with_candies(candies, extra_candies)
    max = candies.max
    result = []
    
    for x in candies do
       if x + extra_candies >= max then result << true else result << false end 
    end
    result
end
```