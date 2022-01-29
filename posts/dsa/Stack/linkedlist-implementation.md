---
title: "Linked List Implementation"
section: "Ruby"
date: "2021-12-02"
---

Utilized circular linked list that I implemented [here](./circular-doubly-linked-list).
```rb
require '../linkedlist/my_cdlist.rb'

# I added this extra method to use in Stack
class CircularLinkedList 
  def get_tail
    @tail.data
  end
end
```

```rb
class Stack 
  def initialize(data = nil)
    @stack = CircularLinkedList.new(data)
  end

  def push(data)
    @stack.push_back(data)
  end 

  def pop 
    if is_empty? 
      puts "stack is empty.."
    else 
      @stack.pop_back
    end
  end 

  def top 
    if is_empty? 
      puts "stack is empty.."
    else 
      puts "[top] of the stack: #{@stack.get_tail}"
    end
  end 

  def display
    if is_empty? 
      puts "stack is empty.."
    else 
      @stack.print_list
    end
  end

  def is_empty? 
    @stack.node_count == 0
  end 
end 
```