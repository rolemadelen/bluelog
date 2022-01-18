---
title: "21. Merge Two Sorted Lists"
from: "leetcode"
level: "easy"
---

```cpp
class Solution {
  public:
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
      ListNode *head;
      if (!l1) return l2;
      if (!l2) return l1;

      if (l1->val < l2->val) {
        head = l1;
        l1 = l1->next;
      }
      else {
        head = l2;
        l2 = l2->next;
      }

      ListNode *temp = head;
      while (l1 && l2) {
        if (l1->val < l2->val ) {
          temp->next = l1;
          l1 = l1->next;
        } else {
          temp->next = l2;
          l2 = l2->next;
        }
        temp = temp->next;
      }

      while (l1) {
        temp->next = l1;
        temp = temp->next;
        l1 = l1->next;
      }

      while (l2) {
        temp->next = l2;
        temp = temp->next;
        l2 = l2->next;
      }

      return head;
    }
};
```