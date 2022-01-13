---
from: 'leetcode'
level: 'medium'
---

## Ruby

```rb
# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @param {Integer} n
# @return {ListNode}
def remove_nth_from_end(head, n)
    cnt = 0
    curr = head
    
    while curr
        cnt += 1
        curr = curr.next
    end 
    
    if cnt == n
        head = head.next    
    else
        cnt -= n

        curr = head
        (cnt-1).times {curr = curr.next}
        curr.next = curr.next.next
    end
    
    head
end
```