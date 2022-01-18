---
title: "23. Merge k Sorted Lists"
from: 'leetcode'
level: 'hard'
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
# @param {ListNode[]} lists
# @return {ListNode}
def merge_k_lists(lists)
  nodes = []
  lists.each do |head|
    while head
      nodes << head.val
      head = head.next
    end
  end 

  return [] if nodes.empty?

  nodes.sort!
  new_list = ListNode.new(nodes[0])
  curr = new_list
  size = nodes.size
  for i in 1...size 
    curr.next = ListNode.new(nodes[i])
    curr = curr.next
  end

  new_list
end
```