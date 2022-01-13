---
from: "leetcode"
level: "easy"
---

```rb
def max_depth(root)
  return depth(root, 0)
end

def depth(node, cnt)
  return cnt if node == nil

  left = depth(node.left, cnt+1)
  right = depth(node.right, cnt + 1)

  [left, right].max
end
```