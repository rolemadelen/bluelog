---
title: "큐 (Queue)"
subtitle: "큐의 기본 개념과 기능에 대하여 알아본다"
date: "2021-06-20"
lang: "ko"
tags:
- queue
---

## 큐(Queue) 란
먼저 집어넣은 자료가 먼저 나오는 FIFO (First-In First-Out) 형식의 자료구조.

![queue figure](/images/in-post/dsa/queue/queue1.png)

### _enqueue(data)_
새로운 항목을 큐에 추가한다.

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
큐의 첫 번째 항목을 제거한다.

```cpp
void Queue::dequeue(void) {
    Node *temp = front;
    front = front->next;
    delete temp;
    --size;
}
```

### _getFront()_
큐의 첫 번째 항복을 반환한다.

```cpp
int Queue::getFront(void) {
    return front->data;
}
```

### _getBack()_
큐의 마지막 항목을 반한한다.

```cpp
int Queue::getBack(void) {
    return back->data;
}
```

### _isEmpty()_
큐가 비어있는지 확인하는 함수. 비어있으면 `true` 그렇지 않으면 `false`를 반환한다.
```cpp
bool Queue::isEmpty(void) {
    return !size;
}
```

### 큐의 사용 사례 
- 너비 우선 탐색 (BFS, Breadth First Search)
- 우선순위가 같은 작업 예약 (인쇄 대기열)
- 선입선출이 필요한 대기열 (티켓 카운터)
- 프린터의 출력 처리
- 프로세스 관리

## Reference
- [[자료구조] 큐(Queue)란](https://gmlwjd9405.github.io/2018/08/02/data-structure-queue.html)
- [Stacks and Queues](https://www.andrew.cmu.edu/course/15-121/lectures/Stacks%20and%20Queues/Stacks%20and%20Queues.html)
