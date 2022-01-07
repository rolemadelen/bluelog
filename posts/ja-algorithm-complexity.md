---
title:  "Big-O記法とは"
subtitle: "ビッグ・オー (Big-O) 最悪の場合"
date:   "2021-05-03"
lang: "ja"
---

## Big-O記法とは
Big-O記法（`O(log N)`, `O(N)`, `O(N!)`, ...）は計算時間の上限示す。つまり、最悪の場合の計算量を示すということ。

<br>

Big-Oは<u>最悪の場合の計算量</u>というのはわかったけど。これてどういう意味だろう。

<br>

Big-Oが我らに聞く質問は「 `N`が無限に大きくなるとアルゴリズムはどうなるか」だと思う。アルゴリズムを実装するときこの質問は大事。なぜかというと、結果的にBig-Oがアルゴリズムがどのぐらい効率的かを表すため。

<br>

下の表はよく使われる7つのBig-Oの性能を比べたググラフ。

![Big-Oh Chart](/images/in-post/dsa/complexity/big-oh.png)

一番早いのがO(1)で、`N`とは関係なく必ず一回だけ実行される。赤い部分に近づくほど演算回数が増えてアルゴリズムが遅くなる。

### O(1)
```cpp
cout << "Hello, World" << endl;
```

### O( log(N) )

```cpp
while(n)
    n = n / 2;
```

### O(N)

```cpp
for(int i=0; i<n; ++i);
```

### O(N・log(N))

```cpp
for(int i=0; i<n; i++) { // O(n)
    for(int j=i;; j/=2); // O(log n)
}
```

### O(N^2)

```cpp
for(int i=0; i<n; i++)   { // O(n)
    for(int j=0; j<n; j++); // O(n)
}
```

### O(2^n)

```cpp
int fib(int n) {
    if(n==0||n==1) return 1;
    return fib(n-1) + fib(n-2);
}
```

### O(n!)
Some well-known problems with a factorial time complexity.

- [Travelling salesman problem](https://en.wikipedia.org/wiki/Travelling_salesman_problem)
- [Knapsack problem](https://en.wikipedia.org/wiki/Knapsack_problem)
- [The Clique Problem](https://en.wikipedia.org/wiki/Clique_problem)

---

## Big-O記法のルール

**Coefficient Rule**
- 無限に近い数字に何の数字をかけても無限なので、 Nに影響がない係数は全て捨てられる。
    ```
    O(kf(n))  ->  O(f(n)) 
    O(5n)     ->  O(n)
    ```

**Sum Rule**
- 最終時間計算量が複数の式の和（sum）の場合は、最終Big-Oも複数のBig-Oの和で表記する。
    ```
    O(h(n)) + O(g(n))  ->  O(h(n) + g(n))
    O(n)+O(m)          ->  O(n+m)
    ```

**Product Rule**
- 最終時間計算量が一つ以上の計算量の積で成り立っている場合、 最終Big-Oも複数のBig-Oの積で表記する。
    ```
    O(f(n)) \times O(g(n))   ->  O(f(n)g(n))
    O(n^2) \times O(log(n))  ->  O(n^2 log(n))
    O(n) \times O(m)         ->  O(nm)
    ```

**Polynomial Rule**
- 時間計算量が多項式の場合、Big-Oは当該式の最高次項（highest degree）になる。
    ```
    f(n) = 5n^2 + 7n  ->   O(n^2)
    f(n) = 10n + 2    ->   O(n)
    f(n) = 10         ->   O(1)
    ```
---

## 参考
- JavaScript Data Structures and Algorithms - Sammie Bae