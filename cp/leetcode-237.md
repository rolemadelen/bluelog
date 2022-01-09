---
from: 'leetcode'
level: 'easy'
---

## C++ 
```cpp
class Solution {
  public:
    void deleteNode(ListNode* node) {
      node->val = node->next->val;
      ListNode *temp = node->next;
      node->next = node->next->next;
      delete temp;
    }
};
```

## JavaScript
```js
var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
```

## Ruby
```rb
def delete_node(node)
  node.val = node.next.val
  node.next = node.next.next
end
```