---
from: 'leetcode'
level: 'easy'
---

## Ruby
```rb
def reverse_words(s)
  s.split(' ').each { |s| s.reverse! }.join(' ')
end
```