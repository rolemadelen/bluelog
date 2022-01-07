---
title: "C/C++ の配列"
subtitle: "配列というのは？ 配列の機能は？"
date: "2021-10-27"
lang: "ja"
---

## 配列 (Array) とは

Imagine we have to declare 100 distinct `int` variables to use 100 different values.

```cpp
int a1, a2, a3, a4, ...., a97, a98, a99, a100; 
```

すごく時間かかるし、とても inefficient な作業になります。
100個の変数を保存して使いたいとき使えるコンテナーみたいなのがあったら便利でしょう。

<br>

実は、できます。

<br>

C/C++言語は配列 (Array) という名のデータ構造をprovideします。

```cpp
// int系の変数100個保存できる配列
int numbers[100];
```

**配列**はエレメントのcollectionで、**エレメントはメモリ上に連続して配置している**データ構造です。


## 配列のエレメントとメモリ住所

![Memory Location](/img/in-post/ds-algo/array/20211024-memory-location.svg)

The above figure represents an integer array. Take a look at any two adjacent hexadecimal numbers -- memory address -- prefixed with `0x`. They are defer by 4 bytes, but why? Earlier we said that elements are stored at contiguous memory locations. So shouldn't it be differ by a byte like 200, 201, 202, ... etc?

<br>

Actually those elements are located contiguously in memory. How big is `int` type? 4 bytes.
Remember that that array in the figure is a type of `int`. So, each element takes up 4 bytes of space in the memory.

<br>

Let's try it. Compile below code and see what the output is.

```c
#include <stdio.h>

int main()
{
    int arr[5];
    printf("arr[0]: %p\n", arr);
    printf("arr[1]: %p\n", arr+1);
    printf("arr[2]: %p\n", arr+2);
    printf("arr[3]: %p\n", arr+3);
    printf("arr[4]: %p\n", arr+4);
    
    return 0;
}
```
Here's the output of the program ran in my machine.

![addresses increasing by 4 bytes](/img/in-post/ds-algo/array/20211024-int-array-memory.png)

Memory addresses are random so the value will be different, but your output should show that it increases by 4 bytes.

<br>

The name of the array `arr` is equivalent to the memory address of the first element of the array `arr[0]`. And when you add one (`arr + 1`) to the memory address, it doesn't just add a value 1. It offsets the distance by the type of your data from the base. Since our array is of type `int`, it will increment the value by 4 which then points to the second element of the array (`arr[1]`).

<br>

If you want to make sure that that 4 is really coming from the data type `int`, try compiling the code above again with different type of arrays such as `char`. Then the output will display number of memory addresses which differ by 1 byte only.

<br>

**Remember**: Location of the next element depends on the data type we use.

## 配列の長さ

Arrays in C/C++ has a fixed size container, meaning the size cannot be shirked nor expanded.

<br>

Array elements are located contiguously in the memory and we cannot be sure whether the space after that is free to use or not. There maybe some other important data that we should not overwrite it by allocating extra memory to expand the array. This is important especially in C/C++ because it does not throw an error for index out of bound.

<br>

Shrinking seems like an okay move, but this is something only a compiler can do. When we complie the code, the compiler first reserves or allocates a block of memory for however big our array is. We cannot tell our compiler to deallocate and shrink the array during the runtime.

<br>

(*We can actually use dynamic array to expand and shrink the size but we'll cover that later.)*

## 配列インデクシング (indexing)

The index of an array in C/C++ starts from 0 not 1. This is called **zero-based indexing**. 

![Array zero-based indexing](/img/in-post/ds-algo/array/20211024-array-indexing.svg)

There are other types of indexing as well such as **1-based** which starts from 1, or **n-based**, where the index starts from any chosen value.

## 配列の長所

1. Can access any element very fast using the index - random access is allowed.
2. Better [Cache locality](https://en.wikipedia.org/wiki/Locality_of_reference).
3. Can store multiple of same type variables.

## 配列の短所

1. Fixed size - cannot shrink nor expand the size.
2. Insertion and deletion of elements can be costly.
3. An array of objects could take a lot of memory.

## 参照
- [https://www.geeksforgeeks.org/introduction-to-arrays/](https://www.geeksforgeeks.org/introduction-to-arrays/)