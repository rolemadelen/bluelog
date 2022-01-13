---
from: 'leetcode'
level: 'medium'
---

## Ruby

```rb
# runtime: 116ms faster than 100% of Ruby submission
# memory: 217.1MB, less than 80% of Ruby submission

# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @return {ListNode}
def sort_list(head)
  nodes = []
  curr = head
  while curr
    nodes << curr.val
    curr = curr.next
  end

  nodes.sort!
  curr = head
  for i in 0...nodes.size
    curr.val = nodes[i]
    curr = curr.next
  end

  head
end
```