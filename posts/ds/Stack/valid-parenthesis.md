---
title: "Valid Parenthesis"
date: "2021-12-04"
section: "Ruby"
---

```rb
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