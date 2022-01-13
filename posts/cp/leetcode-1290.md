---
from: 'leetcode'
level: 'easy'
---

## C++
```cpp
class Solution {
  public:
    int getDecimalValue(ListNode* head) {
      unsigned long result = 0;

      while (true)
      {
        result = result  << 1 + head->val;
        head = head->next;

        if (head == NULL || head == nullptr) break;
      }

      return result;
    }
};
```

## JavaScript

```js
var getDecimalValue = function(head) {
  let result = 0;

  while (true) {
    result = result * 2 + head.val;
    if (head.next === null) break;
    head = head.next;
  }

  return result;
};
```

## Ruby

```rb
def get_decimal_value(head)
  result = 0

  while true do
    result = result * 2 + head.val
    head = head.next

    break if head == nil
  end

  result
end
```