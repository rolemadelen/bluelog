---
title: "167. Two Sum II - Input Array Is Sorted"
from: "leetcode"
level: "easy"
---

## Ruby
```rb
def two_sum(numbers, target)
  hash = {}
  idx = 0
  numbers.each do |v|
    if hash[target-v]
      return [hash[target-v], idx+1]
    end

    hash[v] = idx+1
    idx += 1
  end
end
```