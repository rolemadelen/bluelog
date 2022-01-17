---
title: "150. Evaluate Reverse Polish Notation"
from: 'leetcode'
level: 'medium'
---

## Ruby

```rb
# @param {String[]} tokens
# @return {Integer}
class String
  def is_num
    !!match(/^([-]?)[0-9]+$/)
  end
end

def eval_rpn(tokens)
  op = []
  tokens.each do |t|
    if t.is_num
      op.push(t.to_i)
    else
      a = op.pop
      b = op.pop
      if t == "+"
        op.push(a+b)
      elsif t == "-"
        op.push(b-a)
      elsif t == "*"
        op.push(a*b)
      elsif t == "/"
        op.push((b/a.to_f).to_i)
      end
    end
  end
  op.pop
end
```