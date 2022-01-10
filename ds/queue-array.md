---
title: "Queue - Array"
date: "2021-12-03"
category: 'queue'
lang: "Ruby"
---

```rb
class Queue
  def initialize 
    @queue = []
  end

  def enqueue(data)
    @queue << data 
  end

  def dequeue
    if is_empty?
      puts "queue is empty.."
    else
      @queue.shift
    end
  end

  def is_empty? 
    return @queue.size == 0
  end

  def display 
    print " front | "
    @queue.each do |data|
      print "#{data} "
    end
    puts "| back"
  end
end
```