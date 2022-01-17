---
title: "704. Binary Search"
from: 'leetcode'
level: 'easy'
---

## Ruby 
```rb
def search(nums, target)
  binary_search(nums, 0, nums.length-1) { |v| v - target }
end

def binary_search(arr, l, h, &proc)
  if l <= h
    mid = l + (h-l)/2
    res = proc.call(arr[mid])
    if res == 0
      return mid
    elsif res > 0 
      return binary_search(arr, l, mid-1, &proc)
    else 
      return binary_search(arr, mid+1, h, &proc)
    end
  end

  -1
end
```