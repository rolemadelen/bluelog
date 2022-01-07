---
title: "連結リスト (LinkedList)"
subtitle: "連結リストの特性、タイプ、そして機能について調べよう。"
date: "2021-05-17"
lang: "ja"
---

# 連結リスト (Linked List)

ノードの集合体で構成される線形データ構造で、各ノードはデータフィールドと次のノードへのポインター(pointer)を持っています。
配列データ構造とは異なり、格ノードはメモリに連続して配置されていないです。

![linkedlist](/images/in-post/dsa/linkedlist/ko/linkedlist1.png)

## 連結リストの特性
- **k**番目のノードにアクセス及び変更は**O(k)**。
- 新しいノードの挿入及び除去は**O(1)**。
- 各ノードがメモリ上に連続して配置していないので[キャッシュヒット率](https://parksb.github.io/article/29.html)が低い。
- 各ノードは32ビットPCでは4バイト、64ビットPCでは8バイトの大きさを持つため、 [メモリオーバーヘッド](https://wa3.i-3-i.info/word12471.html)が発生する。

## 連結リストのタイプ

### 単方向リスト

![singly linkedlist](/images/in-post/dsa/linkedlist/ja/singly-linkedlist.svg)

単方向リストのノードは次のノードを指すポインター(*pointer*)を持っています。そして、「単方向リスト」の文字通り、左から右方向だけに巡回ができます。
最後のノードはヌル(*null*)を指します。

### 双方向リスト
![doubly linkedlist](/images/in-post/dsa/linkedlist/ja/doubly-linkedlist.svg)

双方向リストのノードは前後のノードを指すポインターを持って、左右どちらの方向でも巡回ができるリストです。
最初のノードの前 (*prev*)、そして最後のノードの次 (*next*) はヌルを指します。

### 円形連結リスト
「単方向リスト」と「双方向リスト」にはヌルデータを指すノードが存在します。そのノードを見つけると、リストの最初及び最後の配置がわかります。
しかし、ヌルがない円形リストというのもあります。

<br>

**単方円形向リスト**
![circular singly linkedlist](/images/in-post/dsa/linkedlist/ja/singly-circular.svg)

**双方向円形リスト**
![circular doubly linkedlist](/images/in-post/dsa/linkedlist/ja/doubly-circular.svg)

円形連結リストのノードはヌルを指さないので、必ず他のノードを指します。ノードが一つしかない場合は、そのノード自身を指します。
![self pointing list](/images/in-post/dsa/linkedlist/ja/single-node.svg)


## 連結リストの機能

### データのアクセス及び変更: **O(N)**
配列の場合はindex (*operator[ ]*) を使って任意のデータに直接アクセスできましたが、連結リストでは不可能です。
リストの場合は最初のノード (*head*) から順番に進まなければいけません。

<br>

```cpp
// 3番目のデータにアクセス 
unsigned index = 3;
Node *temp = head;
while(index>1) {
    temp = temp->next;
    --index;
}
```

### ノードの追加: **O(1)**

配列で新しいデータを追加するときは、以降にあるすべてのデータを１ブロック右側にプッシュする面倒な作業が必要です。
でもリストの場合はすごく簡単になります。

<br>

各ノードは次のノードのアドレスを持ちます。そして、そのアドレスを使ってどれが次のノードかがわかります。
なので、現在のノードが新しいノードを指すように、つまり新しいノードのアドレスを代入することで追加ができます。

<br>

```cpp
// ２番目の配置に新しいノードを追加
Node *temp = head;
Node *newNode = new Node(data);

newNode->next = temp->next;
temp->next->prev = newNode;
temp->next = newNode;
newNode->prev = temp;
```

### ノードの除去 **O(1)**

除去も追加と同じく、除去するノードを指さないようにするだけで完了します。


```cpp
Node *temp = nodeToDelete; // 除去するノード

temp->prev->next = temp->next;
temp->next->prev = temp->prev;
```

## 練習問題
Leetcodeで下の4つの問題を解いてみよう。
+ [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)
+ [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
+ [160. Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/)
+ [203. Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/)

---

### 21. Merge Two Sorted Lists [🔗](https://leetcode.com/problems/merge-two-sorted-lists/)
```cpp
class Solution {
    public:
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        ListNode *res = new ListNode(0);
        ListNode *temp = res;

        while(l1 && l2) {
            if(l1->val <= l2->val) {
                cout << "l1: " << l1->val << endl;
                temp->next = l1; 
                temp = temp->next;
                l1 = l1->next;
            } else {
                cout << "l2: " << l2->val << endl;
                temp->next = l2;
                temp = temp->next;
                l2 = l2->next;
            }
        }

        while(l1) {
            temp->next = l1;
            temp = temp->next;
            l1 = l1->next;
        }

        while(l2) {
            temp->next = l2;
            temp = temp->next;
            l2 = l2->next;
        }

        return res->next;
    }
};
```

### 141. Linked List Cycle [🔗](https://leetcode.com/problems/linked-list-cycle/)
```cpp
class Solution {
    public:
    bool hasCycle(ListNode *head) {
        if(!head || !(head->next)) return false;

        ListNode *turtle = head;
        ListNode *hare = head->next;

        while(turtle != hare) {
            if(turtle == nullptr || hare == nullptr) return false;

            if(turtle) turtle = turtle->next;

            if(hare) hare = hare->next;
            if(hare) hare = hare->next;
        } 

        return true;
    }
};
```

### 160. Intersection of Two Linked Lists [🔗](https://leetcode.com/problems/intersection-of-two-linked-lists/)
```cpp
class Solution {
    public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        unordered_set<ListNode*> us;

        ListNode *temp = headA;
        while(temp) {
            us.insert(temp);
            temp = temp->next;
        }

        temp = headB;
        while(temp) {
            if(us.find(temp) != us.end()) return temp;
                temp = temp->next;

        return nullptr;

    }
};
```

### 203. Remove Linked List Elements [🔗](https://leetcode.com/problems/remove-linked-list-elements/)
```cpp
class Solution {
    public:
    ListNode* removeElements(ListNode* head, int val) {
        if(!head) return head;

        ListNode *temp = head->next;
        ListNode *prev = head;

        while(temp != nullptr) {
        if(temp->val == val) {
            prev->next = temp->next;
            delete temp;
            temp = prev->next;
        } else {
            prev = temp;
            temp = temp->next;
        }

        if(head->val == val) {
            temp = head;
            head = head->next;
            delete temp;
        }
        return head;
    }
};
```

## Reference
- [https://blog.encrypted.gg/932?category=773649](https://blog.encrypted.gg/932?category=773649)