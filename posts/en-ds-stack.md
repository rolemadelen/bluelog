---
title: "Stack"
subtitle: "Characteristics, types, and operations of Stack"
date: "2021-06-20"
lang: "en"
---

## What is Stack?
Stack is a data structure where a data enters and leaves from the same end of the list.
It is also known as a **LIFO (Last-In First-Out)** data structure.

![stack figure](/images/in-post/dsa/stack/stack1.png)

<br>

Think of a pile of plates to clean on a restaurant. 
In order to get to the bottom (without lifting the whole pile), we need to remove it one by one from the top.
And the plate on the top must have been the last one (or the most recent one) to join that pile and therefore it gets to
leave that pile first, hence it is LIFO.

<br>

This is how Stack works. Only the data on the top is available and we need to remove or _pop_ it to access
any other data beneath it.

### _push(data)_

Inserts a new data on top of the stack.

```cpp
void Stack::push(int data) {
    // top = a pointer to the 'top' of the stack
    Node *newNode = new Node(data);
    newNode->next = top;
    top = newNode;
    ++size;
}
```

### _pop()_

Removes a data on top of the stack.

```cpp
void Stack::pop(void) {
    // top = a pointer to the 'top' of the stack
    Node *temp = top;
    top = top->next;
    delete temp;
    temp = nullptr;
    --size;
}
```

### _peek()_

Returns the data on top of the stack without removing it.

```cpp
int Stack::peek(void) {
    return top->data;
}
```

### _isEmpty()_

Returns `true` if a stack is empty, else returns `false`.

```cpp
bool Stack::isEmpty(void) {
    return !size;
}
```

### Applications of Queue
- Reversing Order
- Testing Symmetry
- Undoing Commands
- [Backtracking](https://www.geeksforgeeks.org/backtracking-introduction/), ...and more

### Practice Problems (Leetcode)
- [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
- [1021. Remove Outermost Parentheses](https://leetcode.com/problems/remove-outermost-parentheses/)
- Bonus: [155. Min Stack](https://leetcode.com/problems/min-stack/)

---

#### 20. Valid Parentheses [code](https://leetcode.com/problems/valid-parentheses/)
```cpp
class Solution {
  public:
    bool isValid(string s) {
      vector<char> stack;

      for(char c : s) {
        if(c==40 || c==91 || c==123) {
          stack.push_back(c);
        } else {
          if(stack.size() == 0) return false;

          char p = stack.back();
          if( (p==40 && c==41) || 
              (p==91 && c==93) || 
              (p==123 && c==125) ) 
             stack.pop_back();
          else return false;
        }
      }

      return stack.size() == 0;
    }
};
```

#### 1021. Remove Outermost Parentheses [code](https://leetcode.com/problems/remove-outermost-parentheses/)
```cpp
class Solution {
  public:
    string removeOuterParentheses(string s) {
      bool opened = false;
      string res = "";
      int cnt=0;

      for(char c : s) {
        if(c==40) {
          if(opened) res+=c, ++cnt;
          else opened = true;
        } else if(c == 41) {
          if(cnt==0) opened = false;
          else res+=c, --cnt;
        }
      }

      return res;
    }
};
```

#### Bonus: 155. Min Stack [code](https://leetcode.com/problems/min-stack/)
```cpp
class MinStack {
  public:
    stack<int> s1;

    MinStack() {}

    void push(int x) {
      if(s1.empty()) {
        s1.push(x);
        s1.push(x);
      } else {
        int y = s1.top();
        s1.push(x);
        s1.push((y<x) ? y : x);
      }
    }

    void pop() {
      s1.pop();
      s1.pop();
    }

    int top() {
      int x = s1.top();
      s1.pop();
      int y = s1.top();
      s1.push(x);
      return y;
    }

    int getMin() {
      return s1.top();
    }
};
```


## Reference
- [Stacks and Queues](https://www.andrew.cmu.edu/course/15-121/lectures/Stacks%20and%20Queues/Stacks%20and%20Queues.html)
- [Stacks and LIFO Structures: Implementation and Use Cases](https://medium.com/swift2go/stacks-and-lifo-structures-implementation-and-use-cases-7ada8f8c400)