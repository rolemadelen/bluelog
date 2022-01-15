---
title: "Infix to Postfix"
date: "2021-12-05"
category: 'stack'
lang: "Ruby"
---

```rb
class String 
  def is_operand?
    !!match(/^[a-zA-Z]$/)
  end

  def precedence
    return 5 if self == '^'
    return 2 if self == '*' or self == '\/'
    return 1 if self == '+' or self == '-'
    return 0
  end

  def to_postfix
    expr = self
    size = expr.size
    op = []
    str = ''

    for i in 0...size do 
      if expr[i] == '('
        op.push(expr[i])
      elsif expr[i] == ')'
        while op.last != '('
          str += op.pop
        end
        op.pop
      elsif expr[i].is_operand?
        str += expr[i]
      else 
        if op.empty? or expr[i].precedence > op.last.precedence
          op.push(expr[i])
        else
          while !op.empty? and expr[i] != '(' and expr[i].precedence <= op.last.precedence
            str += op.pop
          end
          op.push(expr[i])
        end
      end
    end

    while !op.empty?
      str += op.pop
    end

    return str
  end
end

while true
  print "Enter an expression: "
  expr = gets.chomp 
  break if expr.empty?
  puts "postfix: #{expr.to_postfix}"
end
```