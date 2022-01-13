---
from: "leetcode"
level: "easy"
---

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
          if((p==40 && c==41) || (p==91 && c==93) || (p==123 && c==125)) stack.pop_back();
          else return false;
        }
      }

      return stack.size() == 0;
    }
};
```

```rb
# @param {String} s
# @return {Boolean}
def is_valid(s)
  return false if s[0] == ')' or s[0] == '}' or s[0] == ']'
  return false if (s.size)&1 == 1

  stack = []
  size = s.size

  for i in 0...size do
    if s[i] == '(' or s[i] == '[' or s[i] == '{'
      stack.push(s[i])
    elsif s[i] == ')'
      top = stack.pop
      return false if top != '('
    elsif s[i] == ']'
      top = stack.pop
      return false if top != '['
    elsif s[i] == '}'
      top = stack.pop
      return false if top != '{'
    end
  end 
  return stack.empty?
end
```