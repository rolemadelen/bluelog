---
from: 'leetcode'
level: 'easy'
---

## C++
```cpp
class Solution {
  public:
    vector<int> answer;
    vector<int> preorderTraversal(TreeNode* root) {
      preorder(root);
      return answer;
    }

    void preorder(TreeNode *node) {
      if(!node) return;

      answer.push_back(node->val);
      preorder(node->left);
      preorder(node->right);
    }
};
```

## C++: Morris Traversal
```cpp
class Solution {
void morrisTraversal(TreeNode* root) {
  vector<int> answer;

  while(root != nullptr) {
    if(root->left == nullptr) {
      answer.push_back(root->val);
      root = root->right;
    } else {
      // inorder predecessor
      TreeNode *curr = root->left;
      while(curr->right && curr->right != root) curr = curr->right;

      // check if inorder prede's right child is root
      if(curr->right == root) {
        curr->right = nullptr;
        root = root->right;
      } else {
        // if not, update the right child
        answer.push_back(root->val);
        curr->right = root;
        root = root->left;
      }
    }
  }
  return answer;
}
```