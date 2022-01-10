---
from: 'leetcode'
level: 'easy'
---

## C++

```cpp
class Solution {
  public:
    ListNode* middleNode(ListNode* head) {
      int size = 0;

      ListNode *temp = head;

      while(temp)
      {
        ++size;
        temp = temp->next;
      }

      size >>= 1;
      temp = head;
      for(int i=0;i<size; ++i)
      {
        temp = temp->next;
      }

      return temp;
    }
};
```

## JavaScript
```js
var middleNode = function(head) {
  let size = 0;

  let temp = head;
  while(temp) {
    size+=1;
    temp = temp.next;
  }

  size >>= 1;
  temp = head;
  for(let i=0; i<size; ++i) {
    temp = temp.next;
  }

  return temp;
};
```

## Ruby
```rb
def middle_node(head)
  cnt = 0

  temp = head
  while temp
    cnt += 1
    temp = temp.next 
  end

  cnt >>= 1
  temp = head
  for i in (0...cnt) do
    temp = temp.next 
  end

  temp
end
```

## Ruby pt.2
```rb
def middle_node(head)
  temp = head
  cnt = 0
  while temp
    temp = temp.next
    cnt += 1
  end

  temp = head
  cnt = cnt / 2
  for i in 0...cnt
    temp = temp.next
  end
  temp
end
```