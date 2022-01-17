---
title: "328. Odd Even Linked List"
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
# @return {ListNode}
def odd_even_list(head)
    return head if !head or !head.next or !head.next.next
    
    odd = head
    even = head.next
    temp = even
    prev = nil
    
    while odd && odd.next
        odd.next = odd.next.next if odd && odd.next
        prev = odd
        odd = odd.next
        temp.next = temp.next.next if temp && temp.next
        temp = temp.next
    end 
    
    if odd == nil
        prev.next = even
    else
        odd.next = even
    end
    
    head
end
```