---
title: "206. Reverse Linked List"
from: 'leetcode'
level: 'easy'
---

## C++: Iterative
```cpp
class Solution {
  public:
    ListNode* reverseList(ListNode* head) {
      ListNode *prev = nullptr;
      ListNode *curr = head;

      while (curr != nullptr) {
        ListNode *temp = curr->next;
        curr->next = prev;
        prev = curr;
        curr = temp;
      }

      return prev;
    }
};
```

## C++: Recursion
```cpp
class Solution {
  public:
    ListNode* reverseList(ListNode* head) {
      if (head == nullptr || head->next == nullptr) return head;

      ListNode *p = reverseList(head->next);
      head->next->next = head;
      head->next = nullptr;
      return p;
    }
};
```

---

## JavaScript: Iterative
```js
var reverseList = function(head) {
  let prev = null;
  let curr = head;

  while(curr != null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
};
```

## JavaScript: Recursion

```js
var reverseList = function(head) {
  if (head == null || head.next == null) return head;

  let p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p;
};
```

---

## Ruby: Iterative
```rb
def reverse_list(head)
  prev = nil
  curr = head

  while(curr != nil) do
    temp = curr.next
    curr.next = prev
    prev = curr
    curr = temp
  end

  return prev
end
```

## Ruby: Recursion
```rb
def reverse_list(head)
  return head if head==nil or head.next==nil

  p = reverse_list(head.next)
  head.next.next = head
  head.next = nil
  p
end
```