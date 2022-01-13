---
title:  "트리 (Tree)"
subtitle: "트리의 기본 특성과 용어를 공부하고 구현을 해본다."
date:   "2021-06-26"
lang: "ko"
tags:
- tree
---

## 트리(Tree) 란

**노드(Node)** 로 이루어진 자료구조.

![Tree Terms](/images/in-post/dsa/tree/tree-terms.jpg)

하나의 **루트 노드** 와 0개 이상의 **자식 노드** 들로 이루어져 있고, 각 노드들은 간선(edge)들로 연결 되어있다.

트리는 **그래프의 일종**으로 **사이클(cycle)이 없는** 연결 그래프(connected graph)이다.

![Tree check](/images/in-post/dsa/tree/tree-cycle.jpg)

왼쪽은 사이클이 존재하기 때문에 트리가 아닌 반면, 오른쪽은 트리가 맞다.

## 트리의 특성
- 임의의 두 노드간의 경로는 유일하다 (반드시 1개의 경로만을 가진다).
- 노드가 `N`개인 트리는 항상 `N-1`개의 간선을 가진다.
- 그래프가 최소 간선으로 연결되어 있다면 트리이다 (최소 연결 트리). 

## 구현

기본적인 트리이기 때문에 노드만 구현하고, 트리의 삽입은 하드코딩을 한다.

```cpp
#include <iostream>
using namespace std;

class Node {
  public:
    int data;
    Node *left;
    Node *right;

    Node(int _data) : data(_data), left(nullptr), right(nullptr) {;} 
};

int main() {
  Node *root = new Node(10);
  root->left = new Node(20);
  root->right = new Node(30);
  root->right->left = new Node(55);
  root->right->right = new Node(70);
  root->left->left = new Node(40);

  return 0;
}
```

위 코드로 만들어진 트리는 아래와 같은 모습을 가진다.

![Tree](/images/in-post/dsa/tree/tree-output.jpg)

## C/C++: 메모리 해제
직접 메모리 관리를 하지 않는 경우 이 부분은 건너뛰어도 된다.



후위 순회(postorder) 방식으로 재귀를 사용해서 오른쪽 자식부터 차례차례 삭제한다. 
```cpp
void deleteTreeRec(Node *root) {
  if(!root) return;
  deleteTreeRec(root->left);
  deleteTreeRec(root->right);
  delete root;
}
```



BFS 방식. 트리의 레벨 단위로 삭제한다.

```cpp
void deleteTree(Node *root) {
  queue<Node *> q;
  q.push(root);

  while(!q.empty()) {
    Node *temp = q.front();
    q.pop();
    if(temp->left) q.push(temp->left);
    if(temp->right) q.push(temp->right);
    delete temp;
  }
}
```

### 연습 문제 (leetcode)
- [94. Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/) ([code](https://github.com/euisblue/cp/tree/leetcode/easy/94))
- [144. Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/) ([code](https://github.com/euisblue/cp/tree/leetcode/easy/144))
- [965. Univalued Binary Tree](https://leetcode.com/problems/univalued-binary-tree/) ([code](https://github.com/euisblue/cp/tree/leetcode/easy/965/965.cpp))

## Reference
- [https://www.tutorialspoint.com/data_structures_algorithms/tree_data_structure.htm](https://www.tutorialspoint.com/data_structures_algorithms/tree_data_structure.htm)
- [https://fe-churi.tistory.com/16](https://fe-churi.tistory.com/16)
- [https://www.baeldung.com/cs/binary-tree-intro](https://www.baeldung.com/cs/binary-tree-intro)
- [https://gmlwjd9405.github.io/2018/08/12/data-structure-tree.html](https://gmlwjd9405.github.io/2018/08/12/data-structure-tree.html)
