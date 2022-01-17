---
title: "1021. Remove Outermost Parentheses"
from: 'leetcode'
level: 'easy'
---

## C++

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