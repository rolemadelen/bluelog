---
from: "leetcode"
level: "easy"
---

```cpp
/*Morris traversal */
class Solution {
  public:
    vector<int> inorderTraversal(TreeNode* root) {
      vector<int> answer;

      while(root != nullptr) {
        if(root->left == nullptr) {
          answer.push_back(root->val);
          root = root->right;
        } else {
          TreeNode *curr = root->left;
          while(curr->right && curr->right != root) curr = curr->right;

          if(curr->right == nullptr) {
            curr->right = root;
            root = root->left;
          } else {
            // if not, update the right child
            curr->right = nullptr;
            answer.push_back(root->val);
            root = root->right;
          }
        }
      }

      return answer;
    }
};
```