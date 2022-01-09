---
from: 'leetcode'
level: 'easy'
---

## Ruby

```rb
def first_bad_version(n)
  (1..n).bsearch { |i| is_bad_version(i) }
end
```