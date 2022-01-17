---
title: "141. Linked List Cycle"
from: 'leetcode'
level: 'easy'
---

## C++
```cpp
class Solution {
  public:
    bool hasCycle(ListNode *head) {
      if (!head) return false;
      if (!head->next) return false;

      ListNode *tortoise = head->next;
      ListNode *hare = head->next->next;

      for(int i=0; i<10001; ++i) {
        if (tortoise == hare) return true;
        tortoise = tortoise->next;
        if (!tortoise) return false;
        hare = hare->next;
        if(!hare || !hare->next) return false;
        hare = hare->next;
      }

      return false;
    }
};
```

## Javascript
```js
var hasCycle = function(head) {
  if (!head || !head.next) return false;

  let tortoise = head.next;
  let hare = head.next.next;

  for(let i=0; i<10001; ++i) {
    if (tortoise === hare) return true;
    tortoise = tortoise.next;
    if(!tortoise) return false;
    hare = hare.next;
    if(!hare || !hare.next) return false;
    hare = hare.next;
  }

  return false;
};
```

## Ruby
```rb
def hasCycle(head)
  return false if !head or !head.next

  tortoise = head.next
  hare = head.next.next

  0.upto(10000) do |_|
    return true if tortoise == hare

    tortoise = tortoise.next
    return false if !tortoise

    hare = hare.next
    return false if !hare or !hare.next
    hare = hare.next
  end

  false
end
```