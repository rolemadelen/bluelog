---
from: 'leetcode'
level: 'easy'
---

## C++

```rb
def sorted_squares(nums)
  nums.map! {|x| x*x}
  nums.sort
end
```