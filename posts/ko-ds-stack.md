---
title: "스택 (Stack)"
subtitle: "스택의 기본 개념과 기능에 대하여 알아본다"
date: "2021-06-20"
lang: "ko"
---

## 스택(Stack) 이란
한 쪽 끝에서만 자료의 추가와 제거가 가능한 LIFO (Last-In First-Out) 형식으로 저장하는 자료구조.
![stack figure](/images/in-post/dsa/stack/stack1.png)

### _push(data)_

새로운 data를 스택 가장 위에 추가하는 함수.

```cpp
void Stack::push(int data) {
    // top = 스택의 맨위를 가리키는 포인터
    Node *newNode = new Node(data);
    newNode->next = top;
    top = newNode;
    ++size;
}
```

### _pop()_
스택에서 가장 위에 있는 항목을 하나 삭제하는 함수.
```cpp
void Stack::pop(void) {
    // top = 스택의 맨위를 가리키는 포인터
    Node *temp = top;
    top = top->next;
    delete temp;
    temp = nullptr;
    --size;
}
```

### _peek()_
스택에서 가장 위에 있는 항목을 반환하는 함수.
```cpp
int Stack::peek(void) {
    return top->data;
}
```

### _isEmpty()_
스택이 비어있는지 확인하는 함수. 비어있으면 `true` 그렇지 않으면 `false`를 반환한다.
```cpp
bool Stack::isEmpty(void) {
    return !size;
}
```

### 스택의 사용 사례
- 역순 문자열 만들기
- 수식의 괄호 검사
- [퇴각검색](https://it00.tistory.com/26) (백트래킹; backtracking)
- [후위 표기법 계산기](https://gusdnd852.tistory.com/239) (Postfix Calculator)


### 연습 문제 (Leetcode)
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
- [https://www.andrew.cmu.edu/course/15-121/lectures/Stacks%20and%20Queues/Stacks%20and%20Queues.html](https://www.andrew.cmu.edu/course/15-121/lectures/Stacks%20and%20Queues/Stacks%20and%20Queues.html)
