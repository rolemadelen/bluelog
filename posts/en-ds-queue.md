---
title: "Queue"
subtitle: "Learn about characteristics, operations, and applications of Queue"
date: "2021-06-20"
lang: "en"
tags:
- queue
---

## What is Queue

Queue is a linear data structure in which the new data comes in from the one end called **back** or _tail_, and leaves the list
from the other end called **front** or _head_. This makes Queue as **FIFO (First-In First-Out)** data structure, which means that element inserted will be removed first.

![queue figure](/images/in-post/dsa/queue/queue1.png)

### _enqueue(data)_
Inserts a new data to the queue.

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

### _dequeue()_
Removes a data from the queue.

```cpp
void Queue::dequeue(void) {
    Node *temp = front;
    front = front->next;
    delete temp;
    --size;
}
```

### _getFront()_
Returns the first data from the queue.

```cpp
int Queue::getFront(void) {
    return front->data;
}
```

### _getBack()_
Returns the last data from the queue.

```cpp
int Queue::getBack(void) {
    return back->data;
}
```

### _isEmpty()_

Returns `true` if a queue is empty, else returns `false`.

```cpp
bool Queue::isEmpty(void) {
    return !size;
}
```

### Applications of Queue
- BFS, Breadth First Search
- Serving requests on a single shared resource, like a printer, CPU task scheduling, etc
- Handling of interrupts in real-time systems

<!-- 
### Practice Problem (Leetcode)
- [933. Number of Recent Calls](https://leetcode.com/problems/number-of-recent-calls/)
  
---

#### 933. Number of Recent Calls [code](https://leetcode.com/problems/number-of-recent-calls/)
--->

## Reference
- [What is a Queue Data Structure?](https://www.studytonight.com/data-structures/queue-data-structure)