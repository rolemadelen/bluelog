---
title:  "木構造 (Tree)"
subtitle: "木の特性と用語、そして実装する方法を知る。"
date:   "2021-07-15"
lang: "ja"
tags:
- tree
---

## 木構造とは

木構造（英:Tree; ツリー）は 一つまたは複数の**ノード** （英: node）で構成されている非線形データ構造です。

![Tree Terms](/images/in-post/dsa/tree/tree-terms.svg)

親がないツリーの最初のノードを**根 (root)** ノードといいます。 根ノードは一つのツリーに一つしか存在しません。各ノードは０以上の**子ノード (child node)** を持ちます。最大二つの子ノードを持つ木構造を**二分木 (Binary Tree)** といいます。二分木については次の記事でさらに詳しく話します。



ノードがサイクルを形成している場合、それは木構造ではなく**グラフ（Graph）** といいます。

![Tree check](/images/in-post/dsa/tree/tree-cycle.svg)

左の赤構造はグラフで、右の緑構造はツリーてす。

## 特性
- ツリー内の2つのノード間には、1つのパス（path）しかない。
- `N`個のノードを持つ木には、ちょうど`N-1`個の枝がある。
- 最小連結である場合のみグラフが木である。

## 木構造の実装

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

上のコードを実行すると、下のような木構造が生成されます。

![Tree](/images/in-post/dsa/tree/tree-output.jpg)

## C/C++ : メモリの解放

> 言語の方で自動的にメモリ管理をする場合、この部分はスキップしても良いです。

C及びC++のような言語では直接割り当てたメモリを解放する必要があります。

例えば、次回学ぶ木の三つの巡回方法の一つであるpreorderを使用する方法があります。



```cpp
void deleteTreeRec(Node *root) {
  if(!root) return;
  deleteTreeRec(root->left);
  deleteTreeRec(root->right);
  delete root;
}
```



また、キューを使ってツリーのレベルごとにノードを削除する方法もあります。



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

## 練習問題
- [94. Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/) ([code](https://github.com/euisblue/cp/tree/leetcode/easy/94))
- [144. Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/) ([code](https://github.com/euisblue/cp/tree/leetcode/easy/144))
- [965. Univalued Binary Tree](https://leetcode.com/problems/univalued-binary-tree/) ([code](https://github.com/euisblue/cp/tree/leetcode/easy/965/965.cpp))

## Reference
- [https://www.tutorialspoint.com/data_structures_algorithms/tree_data_structure.htm](https://www.tutorialspoint.com/data_structures_algorithms/tree_data_structure.htm)
- [https://fe-churi.tistory.com/16](https://fe-churi.tistory.com/16)
- [https://www.baeldung.com/cs/binary-tree-intro](https://www.baeldung.com/cs/binary-tree-intro)
- [https://gmlwjd9405.github.io/2018/08/12/data-structure-tree.html](https://gmlwjd9405.github.io/2018/08/12/data-structure-tree.html)
