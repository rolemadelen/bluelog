---
title:  "이진 트리 (Binary Tree)"
subtitle: "이진 트리의 기본 특성과 용어 그리고 순회(traversal)하는 법을 알아본다."
date:   "2021-06-27"
lang: "ko"
---

## 이진 트리(Binary Tree) 란?
- 각 노드가 최대 2개의 자식을 갖는 트리
![Tree check](/images/in-post/dsa/tree/tree-binary-def.jpg)

### 이진 트리의 성질

> 루트 노드 = 레벨 0, 높이(h) 0;

1. 이진 트리의 최대 레벨이 `i`인 경우, 트리의 최대 노드의 개수는 `2^(i+1) - 1` 이다. 
2. 리프 노드의 개수는 2개의 자식 노드를 가지고 있는 부모 노드의 개수 + 1 이다.
3. 높이 `h`인 이진 트리는 최대 `2^(h+1) - 1`개의 노드를 가진다. 
4. 노드가 `n`개인 이진 트리는 최소 `log_2(n)`, 최대 `n-1`의 높이를 가진다.
5. 노드가 `n`개인 이진 트리는 정확히 `n+1`개의 널(null)을 참조한다.

### 이진 트리의 종류
- **이진 탐색 트리** (Binary Search Tree)
  + 왼쪽 자식들의 값은 부모의 값보다 작다.
  + 오른쪽 자식들의 값은 부모의 값보다 크다.
- **완전 이진 트리** (Full/Strict Binary Tree)
  + 마지막 레벨을 제외한, 트리의 모든 레벨에 노드가 꽉 차 있다.
  + 마지막 레벨은 꽉 차 있지 않아도 된다.
  + 왼쪽에서 오른쪽순으로 노드가 채워져있다.
- **전 이진 트리** (Complete Binary Tree)
  + 모든 노드가 0개 또는 2개의 자식들을 가지는 이진 트리다.
- **포화 이진 트리** (Perfect Binary Tree)
  + 완전 이진 트리 AND 전 이진 트리
  + 노드가 정확히 `2^(h+1) - 1`개이다 (위 이진 트리의 성질 3번 참고).

🛑 문제!

아래 A, B, C, D는 각각 어떤 트리를 나타내고 있을까? 각 트리가 여러 종류의 트리를 나타낼 수 있다.

![Binary Tree Types Questions](/images/in-post/dsa/tree/tree-binary-types-q.jpg)

## 트리 순회 (Tree Traversal)

![Binary Tree Traversals](/images/in-post/dsa/tree/tree-traversal.jpg)

### inorder (중위 순회)
```cpp
// 방문 순서: 왼쪽, root, 오른쪽
void BinaryTree::inorder(Node *node) {
  if(node) {
    inorder(node->left);
    cout << node->data << ' ';
    inorder(node->right);
  }
}
```

### preorder (전위 순회)

```cpp
// 방문 순서: root, 왼쪽, 오른쪽
void BinaryTree::preorder(Node *node) {
  if(node) {
    cout << node->data << ' ';
    preorder(node->left);
    preorder(node->right);
  }
}
```

### postorder (후위 순회)

```cpp
// 방문 순서: 왼쪽, 오른쪽, root
void BinaryTree::postorder(Node *node) {
  if(node) {
    postorder(node->left);
    postorder(node->right);
    cout << node->data << ' ';
  }
}
```

## 노드 삽입

`insertNode()` 함수는 왼쪽부터 오른쪽, 레벨 단위로 순차적으로 노드를 삽입한다.

<br>

1. 루트가 비어있으면 루트에 노드를 추가.
2. 큐를 사용해서 레벨 단위로 노드를 탐색. <br>
    2-1) 노드의 왼쪽이 비어있지 않다면 큐에 추가, 비어있으면 노드를 삽입. <br>
    2-2) 노드의 오른쪽이 비어있지 않다면 큐에 추가, 비어있으면 노드를 삽입. <br>

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

## 노드 삭제

마지막 리프 노드를 삭제한다.

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

### 연습 문제 (leetcode)
- [617. Merge Two Binary Trees](https://leetcode.com/problems/merge-two-binary-trees/) ([code](https://github.com/yuueu/cp/tree/leetcode/easy/617/617.cpp))

## Reference
- [https://www.tutorialspoint.com/data_structures_algorithms/tree_data_structure.htm](https://www.tutorialspoint.com/data_structures_algorithms/tree_data_structure.htm)
- [https://fe-churi.tistory.com/16](https://fe-churi.tistory.com/16)
- [https://www.baeldung.com/cs/binary-tree-intro](https://www.baeldung.com/cs/binary-tree-intro)
- [https://gmlwjd9405.github.io/2018/08/12/data-structure-tree.html](https://gmlwjd9405.github.io/2018/08/12/data-structure-tree.html)
- [https://www.geeksforgeeks.org/delete-the-last-leaf-node-in-a-binary-tree/](https://www.geeksforgeeks.org/delete-the-last-leaf-node-in-a-binary-tree/)