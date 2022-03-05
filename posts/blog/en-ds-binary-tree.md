---
title:  "Binary Tree"
subtitle: "Learn about the characteristcs of binary tree, types, and tree traversals."
date:   "2021-07-14"
lang: "en"
tags:
- binary tree
---

<style>
    img {
        margin: 1em 0 !important;
    }
</style>

# What is Binary Tree?
A binary tree is a tree data structure where each node can have either 0, 1, or 2 child nodes.

![BST Node](/images/in-post/dsa/tree/bst-node.svg)

Just like a tree, binary tree is also a connected acyclic graph.

## Properties

> Root's level and the height is 0.

1. The binary tree whose level is `i` has at most `2^(i+1) - 1` nodes. 
2. Total number of leaf node is equal to the total number of parents with two child nodes + 1.
3. The binary tree whose height is `h` can have at most `2^(h+1) - 1` nodes.
4. The binary tree with `n` nodes has a height no smaller than `log_2(n)` and no greater than `n-1`.
5. The binary tree with `n` nodes reference exactly `n+1` nulls.

## Types of Binary Tree
### Binary Search Tree
+ Left child's data is smaller than that of the parent.
+ Right child's data is gretaer than that of the parent.
![BST](/images/in-post/dsa/tree/bst.svg)

### Full/Strict Binary Tree
+ Nodes are filled in order from left to right.
+ Every internal node has exactly 2 child nodes.
+ The bottom level does not have to be full.
![Full Binary Tree](/images/in-post/dsa/tree/fullbt.svg)

### Complete Binary Tree
+ Every internal node has either 0 or 2 child nodes.
![Complete Binary Tree](/images/in-post/dsa/tree/completebt.svg)

### Perfect Binary Tree
+ A binary tree that is both Complete and Full.
+ There are exactly `2^(h+1) - 1` nodes.
![Perfect Binary Tree](/images/in-post/dsa/tree/perfectbt.svg)

## Tree Traversal

![Binary Tree Traversals](/images/in-post/dsa/tree/traversal.svg)

### Inorder
```cpp
void BinaryTree::inorder(Node *node) {
  if(node) {
    inorder(node->left);
    cout << node->data << ' ';
    inorder(node->right);
  }
}
```

### Preorder
```cpp
void BinaryTree::preorder(Node *node) {
  if(node) {
    cout << node->data << ' ';
    preorder(node->left);
    preorder(node->right);
  }
}
```

### Postorder
```cpp
void BinaryTree::postorder(Node *node) {
  if(node) {
    postorder(node->left);
    postorder(node->right);
    cout << node->data << ' ';
  }
}
```

## Node Insertion

This function basically creates a Full Binary Tree where nodes are filled from left to right.



Steps:
1. If `root` is empty, let new node be the `root`.
2. Use *queue* to explore the tree in level order. 
    2-1) Insert the new node at current node's left if it's empty, else enqueue the node. 
    2-2) Insert the new node at current node's right if it's empty, else enqueue the node.
3. Repeat the step #2 until *queue* is empty.

```cpp
void BinaryTree::insertNode(int data) {
  if(!root) root = new Node(data);
  else {
    queue<Node *> q;

    q.push(root);

    while(!q.empty()) {
      Node *temp = q.front();
      q.pop();

      if(temp->left) {
        q.push(temp->left);
      } else {
        temp->left = new Node(data);
        ++size;
        return;
      }

      if(temp->right) {
        q.push(temp->right);
      } else {
        temp->right = new Node(data);
        ++size;
        return;
      }
    }
  }
}
```

## Node deletion

Find the leaf node (the right-most node at the bottom level), and delete it.



```cpp
void BinaryTree::deleteNode(void) {
  if(!root) return;

  if(root->left == nullptr && root->right == nullptr) {
    delete root;
    root = nullptr;
    return;
  }

  Node *lastLevelLevelOrder = nullptr;
  Node *parentOfLastNode = nullptr;
  queue<Node *> q;
  q.push(root);

  while(!q.empty()) {
    Node *temp = q.front();
    q.pop();

    if(temp->left) {
      q.push(temp->left);

      if(temp->left->left == nullptr && temp->left->right == nullptr) {
        lastLevelLevelOrder = temp->left;
        parentOfLastNode = temp;
      }
    }

    if(temp->right) {
      q.push(temp->right);
      if(temp->right->left == nullptr && temp->right->right == nullptr) {
        lastLevelLevelOrder = temp->right;
        parentOfLastNode = temp;
      }
    }
  }

  if(lastLevelLevelOrder && parentOfLastNode) {
    if(parentOfLastNode->right) {
      delete parentOfLastNode->right;
      parentOfLastNode->right = nullptr;
    } else {
      delete parentOfLastNode->left;
      parentOfLastNode->left = nullptr;
    }
  } else {
    cout << "Empty Tree" << endl;
  }
}
```

### Practice (leetcode)
- [617. Merge Two Binary Trees](https://leetcode.com/problems/merge-two-binary-trees/) ([code](https://github.com/euisblue/cp/tree/leetcode/easy/617/617.cpp))

## Reference
- [https://www.tutorialspoint.com/data_structures_algorithms/tree_data_structure.htm](https://www.tutorialspoint.com/data_structures_algorithms/tree_data_structure.htm)
- [https://fe-churi.tistory.com/16](https://fe-churi.tistory.com/16)
- [https://www.baeldung.com/cs/binary-tree-intro](https://www.baeldung.com/cs/binary-tree-intro)
- [https://gmlwjd9405.github.io/2018/08/12/data-structure-tree.html](https://gmlwjd9405.github.io/2018/08/12/data-structure-tree.html)
- [https://www.geeksforgeeks.org/delete-the-last-leaf-node-in-a-binary-tree/](https://www.geeksforgeeks.org/delete-the-last-leaf-node-in-a-binary-tree/)