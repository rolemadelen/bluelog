---
from: 'leetcode'
level: 'easy'
---

## C++

```cpp
class Solution {
  public:
    int subtractProductAndSum(int n) {
      int p = 1;
      int s = 0;

      while(n>0) 
      {
        int t = n%10;
        n = n/10;

        p *= t;
        s += t;
      }

      return p - s;
    }
};
```

## Ruby

```rb
def subtract_product_and_sum(n)
  p = 1
  s = 0

  while n > 0 do
    t = n % 10
    n /= 10

    p *= t
    s += t
  end

  p - s
end
```

## JavaScript

```js
var subtractProductAndSum = function(n) {
  let p = 1;
  let s = 0;

  while (n>0) {
    let t = n%10;
    n = Math.floor(n / 10);

    p *= t;
    s += t;
  }

  return p - s;
};

```