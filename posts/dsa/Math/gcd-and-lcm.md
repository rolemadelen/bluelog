---
title: "Euclidean Algorithm and LCM"
date: "2020-12-28"
section: "C++"
---

[Euclidean algorithm](https://codility.com/media/train/10-Gcd.pdf)

```cpp
int gcd(int a, int b) {
    if (a==0) return b;
    return gcd(b%a, a);
}

int lcm(int a, int b) {
    return (a*b) / gcd(a, b);
}
```