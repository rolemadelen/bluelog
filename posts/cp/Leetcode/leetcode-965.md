---
title: "965. Univalued Binary Tree"
from: 'leetcode'
level: 'easy'
---

## C++

```cpp
class Solution {
  public:
    set<int> s;
    bool isUnivalTree(TreeNode* root) {
      preorder(root);
      return s.size() == 1;
    }

    void preorder(TreeNode* node) {
      if(!node || s.size() > 1) return;
      s.insert(node->val);
      preorder(node->left);
      preorder(node->right);
    }
};
```