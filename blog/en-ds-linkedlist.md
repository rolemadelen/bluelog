---
title: "Linked List"
subtitle: "Characteristics, types, and operations of Linked List"
date: "2021-05-17"
lang: "en"
tags:
- linked list
---

## Linked List

A linked list is a linear data structure composed of collection of nodes where each node contains a data field and a reference to the next node in the list. Unlike the array data structure, the elements are not stored at contiguous memory locations.

![linkedlist](/images/in-post/dsa/linkedlist/ko/linkedlist1.png)

### Characteristics
- Accessisng and modifying the element at index K: **O(K)**
- Inserting a new node: **O(1)**
- Low [cache hit rate](https://medium.com/@nwerneck/about-memory-locality-of-a-linked-list-2867b4f1f7cf)
- Memory overhead exists: every new node takes up 4bytes (32bits machine) or 8bytes (64bits machine) 

### Types of linked list
![linkedlist type](/images/in-post/dsa/linkedlist/en/linkedlist-type1.png)
As noted earlier, a linked list is a linear data structure where each element is a node. In a **singly linked list**, each node holds a refernece to the next node which allows the list to be traversed in one way.



**Doubly linked list** is almost identical except that each node has two references, *previous* and *next* node. One additional node gives the list an ability to traverse in any direction we want.

![linkedlist type](/images/in-post/dsa/linkedlist/en/linkedlist-type2.png)

In singly and doubly linked list, we can identify the end by finding a node that references the *NULL*. In **circular linked list**, however, the last node references the first node and vice versa which creates a cycle in a list.

### Operations

#### Access & Modify: **O(n)**
The random access is not possible in a linked list. In order to access Kth element in a linked list, we need to start from the head node.

```cpp
// access the 3rd element
unsigned index = 3;
Node *temp = head;
while(index>1) {
    temp = temp->next;
    --index;
}
```

#### Inesert: **O(1)**

Assuming we're at the position to insert a new data, we only need to connect nodes using their references. This can be done in constant time.

```cpp
// insert a new node as a 2nd element
Node *temp = head;
Node *newNode = new Node(data);

newNode->next = temp->next;
temp->next->prev = newNode;
temp->next = newNode;
newNode->prev = temp;
```

#### Delete: **O(1)**
We simply re-connect nodes' references which can be done in constant time.

```cpp
Node *temp = nodeToDelete; // a node to delete

temp->prev->next = temp->next;
temp->next->prev = temp->prev;
```

### Practice Problems (Leetcode)
+ [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)
+ [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
+ [160. Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/)
+ [203. Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/)

---

#### 21. Merge Two Sorted Lists [code](https://leetcode.com/problems/merge-two-sorted-lists/)
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

#### 141. Linked List Cycle [code](https://leetcode.com/problems/linked-list-cycle/)
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

#### 160. Intersection of Two Linked Lists [code](https://leetcode.com/problems/intersection-of-two-linked-lists/)
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
        }

        return nullptr;

    }
};
```

#### 203. Remove Linked List Elements [code](https://leetcode.com/problems/remove-linked-list-elements/)
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