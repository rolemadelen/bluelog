---
title: "374. Guess Number Higher or Lower"
from: 'leetcode'
level: 'easy'
---


[https://leetcode.com/problems/guess-number-higher-or-lower/](https://leetcode.com/problems/guess-number-higher-or-lower/)

Solved: 7m00s 

## Problem

We are playing the Guess Game. The game is as follows:

I pick a number from `1` to `n`. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API `int guess(int num)`, which returns three possible results:

- -1: Your guess is higher than the number I picked (i.e. num > pick).
- 1: Your guess is lower than the number I picked (i.e. num < pick).
- 0: your guess is equal to the number I picked (i.e. num == pick).

Return the number that I picked.

## Solution

```cpp
/** 
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is lower than the guess number
 *			      1 if num is higher than the guess number
 *               otherwise return 0
 * int guess(int num);
 */

class Solution {
public:
    int bsearch(int b, int e) {
        while(b <= e) {
            int mid = b + (e-b)/2;
            if(guess(mid) == 0) return mid;
            if(guess(mid) == -1) e = mid-1;
            if(guess(mid) == 1) b = mid+1;
        }
        return -1;
    }
    int guessNumber(int n) {
        return bsearch(1, n);
    }
};
```

## Time Complexity 
- Binary search havles every time - logN
- **O(logN)**

## Space Complexity
- No extra storage was used.
- **O(1)**