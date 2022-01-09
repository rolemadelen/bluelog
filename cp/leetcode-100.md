---
from: "leetcode"
level: "easy"
---

```rb
def is_same_tree(p, q)
  return true if !p and !q
  return false if !p or !q
  return false if p.val != q.val 

  return is_same_tree(p.left, q.left) && is_same_tree(p.right, q.right)
end
```