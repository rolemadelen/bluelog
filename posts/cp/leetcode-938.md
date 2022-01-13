---
from: 'leetcode'
level: 'easy'
---

## C++

```cpp
class Solution {
  public:
    int rangeSumBST(TreeNode* root, int low, int high) {
      if(!root) return 0;

      int sum = 0;
      if (root->val >= low && root->val <= high) sum = root->val;
      if (root->val > low) sum += rangeSumBST(root->left, low, high);
      if (root->val < high) sum += rangeSumBST(root->right, low, high);

      return sum;
    }
};
```

## JavaScript
```js
var rangeSumBST = function(root, low, high) {
  if (!root) return 0;
  let sum = 0;
  if (root.val >= low && root.val <= high) sum = root.val;

  return sum + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
};
```

## Ruby
```rb
def range_sum_bst(root, low, high)
  return 0 if root == nil
  sum = 0

  sum = root.val if (root.val >= low and root.val <= high)
  sum += range_sum_bst(root.left, low, high) if root.val > low    
  sum += range_sum_bst(root.right, low, high) if root.val < high

  sum
end
```