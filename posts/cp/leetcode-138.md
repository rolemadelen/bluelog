---
from: 'leetcode'
level: 'medium'
---

## Ruby Solution 1

```rb
# Definition for Node.
# class Node
#     attr_accessor :val, :next, :random
#     def initialize(val = 0)
#         @val = val
#		  @next = nil
#		  @random = nil
#     end
# end

# @param {Node} node
# @return {Node}
def copyRandomList(head)    
  curr = head
  copy_head = head.clone
  copy_curr = copy_head

  random_list = {}
  random_list[head.object_id.to_s.to_sym] = copy_head

  # copy next
  while curr
    curr = curr.next
    copy_curr.next = curr.clone if curr
    copy_curr = copy_curr.next
    random_list[curr.object_id.to_s.to_sym] = copy_curr if copy_curr
  end

  # copy random
  curr = head
  copy_curr = copy_head
  while curr 
    copy_curr.random = random_list[curr.random.object_id.to_s.to_sym] if curr.random
    curr = curr.next
    copy_curr = copy_curr.next
  end

  copy_head
end
```

## Ruby Solution 2
```rb
def copyRandomList(head)
  copy_head = Marshal.load(Marshal.dump(head))
end
```