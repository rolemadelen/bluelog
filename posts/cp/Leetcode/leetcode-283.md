---
title: "283. Move Zeroes"
from: 'leetcode'
level: 'easy'
---

## Ruby
```rb
def move_zeroes(nums)
    return nums if nums.size == 1 or nums.size == 0
    size = nums.size
    pos = 0
    
    for idx in 0...size do
        if nums[idx] != 0
            temp = nums[pos]
            nums[pos] = nums[idx]
            nums[idx] = temp
            pos += 1
        end
    end
    nums
end
```