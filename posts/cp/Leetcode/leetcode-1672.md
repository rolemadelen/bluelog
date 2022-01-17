---
title: "1672. Richest Customer Wealth"
from: 'leetcode'
level: 'easy'
---

## C++

```cpp
/*
 * Runtime: 12 ms, faster than 39.22% 
 * Memory Usage: 8.1 MB, less than 60.83%
 */
class Solution {
  public:
    int maximumWealth(vector<vector<int>>& accounts) {
      int max = -1;
      for(int i=0; i<accounts.size(); ++i) {
        int sum = 0;
        for(int j=0; j<accounts[i].size(); ++j) {
          sum += accounts[i][j];
        }
        max = sum > max ? sum : max;
      }
      return max;
    }
};
```

## JavaScript
```js
/**
 * Runtime: 80 ms, faster than 56.45% 
 * Memory Usage: 38.7 MB, less than 35.23%
 */
var maximumWealth = function(accounts) {
  let max = 0;
  accounts.forEach((bank) => {
    let sum = 0;
    bank.forEach((money) => {
      sum += money;
    });
    max = sum > max ? sum : max;
  });

  return max;
};
```

## Ruby
```rb
# Runtime: 52 ms, faster than 74.77% 
# Memory Usage: 209.8 MB, less than 96.73%
def maximum_wealth(accounts)
  max = 0

  accounts.each do |bank|
    sum = 0
    bank.each do |money|
      sum += money
    end
    max = sum > max ? sum : max
  end

  max
end
```