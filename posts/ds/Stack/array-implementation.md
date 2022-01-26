---
title: "Array Implementation"
section: "Ruby"
date: "2021-12-02"
---

```rb
class Stack 
  def initialize
    @stack = []
  end

  def push(data)
    @stack.push(data)
  end 

  def pop 
    @stack.pop
  end 

  def top 
    @stack.last
  end 

  def display 
    print " base | "
    if is_empty? 
      print "[EMPTY]"
    else 
      size = @stack.size

      (size-1).times { |i| print "#{@stack[i]} - "}
    end
    puts "#{@stack.last} | top "
  end

  def is_empty? 
    @stack.size == 0
  end 
end 
```