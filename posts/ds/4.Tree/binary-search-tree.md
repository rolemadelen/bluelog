---
title: "Binary Search Tree"
section: "4.2"
date: "2021-12-09"
---

```rb
class Node
  attr_accessor :key, :left, :right 

  def initialize(key) 
    @key = key
    left = nil
    right = nil
  end
end
```

```rb
class BST 
  attr_accessor :root 

  def initialize 
    @root = nil
  end

  def insert_iter(data)
    if @root == nil 
      @root = Node.new(data)
      return
    end

    prev = nil 
    temp = @root 

    while temp != nil 
      if data > temp.key
        prev = temp
        temp = temp.right
      elsif data < temp.key
        prev = temp
        temp = temp.left
      end
    end

    if data > prev.key
      prev.right = Node.new(data)
    else
      prev.left = Node.new(data)
    end
  end

  def delete_node(data)
    @root = delete_node_helper(@root, data)
  end

  def inorder
    inorder_helper(@root)
  end

  def preorder
    preorder_helper(@root)
  end

  def postorder 
    postorder_helper(@root)
  end

  def search(data)
    return true if @root == nil or @root.key == data

    prev = nil 
    curr = @root 

    while curr != nil 
      return true if curr.key == data
      if data > curr.key
        prev = curr
        curr = curr.right
      else
        prev = curr
        curr = curr.left
      end
    end
    return false
  end

  private 

  def inorder_helper(root)
    return if !root
    inorder_helper(root.left)
    print "#{root.key} "
    inorder_helper(root.right)
  end
  
  def preorder_helper(root)
    return if !root
    print "#{root.key} "
    inorder_helper(root.left)
    inorder_helper(root.right)
  end

  def postorder_helper(root)
    return if !root
    inorder_helper(root.left)
    inorder_helper(root.right)
    print "#{root.key} "
  end

  def delete_node_helper(root, data)
    return root if root == nil 

    if data < root.key 
      root.left = delete_node_helper(root.left, data)
      return root
    elsif data > root.key 
      root.right = delete_node_helper(root.right, data)
      return root
    end

    # reach here if root is the node to be deleted
    # if one of the children is empty
    if root.left == nil 
      temp = root.right 
      root = nil 
      return temp
    elsif root.right == nil 
      temp = root.left 
      root = nil 
      return temp
    else 
      successor_parent = root 

      # find successor 
      succ = root.right 
      while succ.left != nil do
        successor_parent = succ 
        succ = succ.left 
      end 

      # delete successor 
      if successor_parent != root 
        successor_parent.left = succ.right 
      else 
        successor_parent.right = succ.right
      end

      # copy successor data to root
      root.key = succ.key

      # delecte successor and return root 
      succ = nil
      return root
    end
  end

  def inorder_successor(node) 
    curr = node
    while curr && curr.left != nil 
      curr = curr.left
    end

    return curr
  end
end
```

[Both iterative and recursive](https://github.com/euisblue/ds-algo/blob/main/binary_search_tree/bst.rb)