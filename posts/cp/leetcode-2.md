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
# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}
def add_two_numbers(l1, l2)
    num1 = l1.val
    num2 = l2.val
    
    pow = 1
    while l1.next
        l1 = l1.next
        num1 = (l1.val) * (10**pow) + num1
        pow += 1
    end 
    
    pow = 1
    while l2.next
        l2 = l2.next
        num2 = (l2.val) * (10**pow) + num2
        pow += 1
    end 
        
    num3 = num1+num2
    l3 = ListNode.new(num3%10)
    curr = l3
    num3 /= 10
    while num3 > 0
        curr.next = ListNode.new(num3%10)
        num3 /= 10
        curr = curr.next
    end 
    
    l3
end
```