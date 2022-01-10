---
title: "キュー (Queue)"
subtitle: "キューの基本概念と機能について知る。"
date: "2021-06-20"
lang: "ja"
tags:
- queue
---

## キュー (Queue) とは
**キュー**とは新しいデータが**back**または *tail* という一つの方からが入ってきて、**front**または *head* というもう一つの方からでていくデータ構造です。この構造を先入先出 (**FIFO** ファイフォー: First-In First-Out) の<wbr>データ構造<wbr>といいます。

![queue figure](/images/in-post/dsa/queue/queue-ja.svg)

キューに入ったデータは、入った順番通りにそのままキューから出ます。キューを身近なもので例えるなら、お店のレジに並んでいる人の流れです。

## キューの機能

> キューは配列と連結リストを用いて実装ができます。この記事では連結リストを使用して説明をします。

### enqueue操作
enqueue(エンキュー)操作は新しいデータをqueueに追加します。

 

```cpp
void Queue::enqueue(int data) {
    Node *newNode = new Node(data);
    if(size==0) {
        front = back = newNode;
    } else {
        back->next = newNode;
        back = newNode;
    }
    ++size;
}
```

### dequeue操作

dequeue(ディキュー)操作はqueueの一番前にあるデータ(*front*)を消去します。



```cpp
void Queue::dequeue(void) {
    Node *temp = front;
    front = front->next;
    delete temp;
    --size;
}
```

### getFront操作

getFront関数はキューの一番最初のデータを返します。



```cpp
int Queue::getFront(void) {
    return front->data;
}
```

### getBack操作

getBack関数はキューの一番最後のデータを返します。



```cpp
int Queue::getBack(void) {
    return back->data;
}
```

### isEmpty操作

空キューを確認する関数です。キューの中にデータがな場合は `true` を返して、データがある場合は `false` を返します。



```cpp
bool Queue::isEmpty(void) {
    return !size;
}
```

### キューの使用例
> キューはいろんなところに使用されています。

- 幅優先探索 (BFS, Breadth-First Search)
- 優先順位がある作業の予約 (例: プリンターの印刷待機列)
- 先入先出の待機列　(例: レジの人の流れ)
- プリンターの出力処理
- プロセス管理

## 関連記事
- [スタック(Stack)とは](/ja/ds/stack)

## Reference
- [[자료구조] 큐(Queue)란](https://gmlwjd9405.github.io/2018/08/02/data-structure-queue.html)
- [Stacks and Queues](https://www.andrew.cmu.edu/course/15-121/lectures/Stacks%20and%20Queues/Stacks%20and%20Queues.html)
