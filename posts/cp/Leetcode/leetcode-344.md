---
title: "344. Reverse String"
from: 'leetcode'
level: 'easy'
---

## Ruby
```rb
# @param {Character[]} s
# @return {Void} Do not return anything, modify s in-place instead.
def reverse_string(s)
  size = s.size
  half = size/2
  for i in 0...half do
    s[i], s[size-i-1] = [s[size-i-1], s[i]] 
  end
  s
end
```