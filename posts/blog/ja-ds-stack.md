---
title: "スタック (Stack)"
subtitle: "スタックの基本概念と機能について知る。"
date: "2021-06-20"
lang: "ja"
tags:
- stack
---

## スタック (Stack) とは
**スタック**は一つの方からのみデータの追加や除去ができるデータ構造です。スタックは後入れ先出し（**LIFO** ライフォ: Last-In First-Out; **FILO** ファイロ: First-In Last-Out）の構造と呼ばれます。単にいうと、最初に入ったデータは、一番最後にスタックから除去されます。
![stack figure](/images/in-post/dsa/stack/stack-ja.svg)


## スタックの機能

> スタックは配列と連結リストを用いてスタックの実装ができます。この記事では連結リストを使用します。

### push操作

スタックに新しいデータを追加することをpush (プッシュ) といいます。

`push(data)` は `data` をスタックのトップにpushします。



```cpp
void Stack::push(int data) {
    // top = スタックのトップを指すポインター
    Node *newNode = new Node(data);
    newNode->next = top;
    top = newNode;
    ++size;
}
```

### pop操作

pushの逆で、データを除去することをpopといいます。

`pop()`関数はスタックの上にあるデータを取り除きます。



```cpp
void Stack::pop(void) {
    // top = スタックのトップを指すポインター
    Node *temp = top;
    top = top->next;
    delete temp;
    temp = nullptr;
    --size;
}
```

### peek操作

スタックの上にあるデータを返す関数です。popはデータを取り除きますが、peekの場合はデータを返すだけでスタックには残っています。



```cpp
int Stack::peek(void) {
    return top->data;
}
```

### isEmpty操作

空スタックかを判別する関数です。空スタックの場合は`true`を、空スタックではないなら`false`を返します。



```cpp
bool Stack::isEmpty(void) {
    return size == 0;
}
```

## 関連記事
- [キュー(Queue)とは](/ja/ds/queue)

## Reference
- [https://www.andrew.cmu.edu/course/15-121/lectures/Stacks%20and%20Queues/Stacks%20and%20Queues.html](https://www.andrew.cmu.edu/course/15-121/lectures/Stacks%20and%20Queues/Stacks%20and%20Queues.html)