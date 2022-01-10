---
title: "Morris traversal: preorder and inorder"
date: "2020-12-28"
category: 'tree'
lang: "C++"
---


```text
 If current does not have left child
   a. Add current’s value
   b. Go to the right, i.e., current = current.right
 Else
   a. In current's left subtree, make current the right child of the rightmost node
   b. Go to this left child, i.e., current = current.left 
```
## Preorder 
```cpp
void morrisTraversalPreorder(Node* _root) {
  Node *node = _root;

  while(node != nullptr) {
    if(node->left == nullptr) {
      cout << node->data << ' ';
      node = node->right;
    } else {
      Node *curr = node->left;
      while(curr->right && curr->right != node) curr = curr->right;

      if(curr->right == node) {
        curr->right = nullptr;
        node = node->right;
      } else {
      cout << node->data << ' ';
        curr->right = node;
        node = node->left;
      }
    }
  }
}
```

## Inorder
```cpp
void morrisTraversalInorder(Node* _root) {
  Node *node = _root;

  while(node != nullptr) {
    if(node->left == nullptr) {
      cout << node->data << ' ';
      node = node->right;
    } else {
      Node *curr = node->left;
      while(curr->right && curr->right != node) curr = curr->right;

      if(curr->right == nullptr) {
        curr->right = node;
        node = node->left;
      } else {
        curr->right = nullptr;
        cout << node->data << ' ';
        node = node->right;
      }
    }
  }
}
```