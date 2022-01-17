---
title: "Find the middle node in a Singly Linked List"
date: "2021-11-30"
category: 'linkedlist'
lang: "Ruby"
---


```rb
=begin 
Return the middle node of a given singly linked list
=end 

class SinglyLinkedList 
  def midnode
    mid = @head 
    curr = @head 
    idx = 0
    while curr.next != nil 
      curr = curr.next 
      if ((idx+1)&1) == 1 
        mid = mid.next
      end 
      idx += 1
    end 

    return mid
  end
end 

slist = SinglyLinkedList.new
5.times { slist.push_back(rand(100)) }
slist.print_list

puts "Middle node: #{slist.midnode.data}"
```