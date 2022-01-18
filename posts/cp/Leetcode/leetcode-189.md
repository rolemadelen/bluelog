---
title: "189. Rotate Array"
from: 'leetcode'
level: 'medium'
---

## Ruby

```rb
# @param {Integer[]} nums
# @param {Integer} k
# @return {Void} Do not return anything, modify nums in-place instead.
def rotate(nums, k)
    k.times { nums.unshift nums.pop }
    nums
end
```