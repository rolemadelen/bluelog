---
title: "[C/C++] 배열(Array)이란?"
subtitle: "여러개의 변수를 한 번에 정의할 수 있을까?"
date: "2021-10-27"
lang: "ko"
tags:
- arrays
---

## 배열이란

`int`형 변수 100개를 사용하기 위해 아래처럼 100개를 정의해야 한다면?


```cpp
int a1, a2, a3, a4, ...., a97, a98, a99, a100; 
```

정말 따분하고 귀찮은 일이 아닐수가 없습니다. 한 번에 100개의 변수를 정의할 수 있다면 얼마나 편할까요?



C/C++에서는 **같은 타입의 변수**를 한 꺼번에 정의할 수 있는 방법을 제공하는데 바로 배열이라고 하는 자료구조입니다.

```cpp
int numbers[100];
```

**배열(Array)**은 다수의 자료들을 하나의 집합으로 보관하는 선형 자료구조로써, 모든 데이터들은 **메모리 상에 연속하게 나열되어 있습니다**.

## 배열의 원소와 주소값

<<<<<<< HEAD
![Memory Location](/images/in-post/dsa/array/memory-location.svg)
=======
![Memory Location](/img/in-post/ds-algo/array/20211024-memory-location.svg)
>>>>>>> 8b1a5f0 (intro to arrays post added)

위 그림은 정수(`int`)의 배열을 나타내고 있습니다. 그런데 보시면 첫 번째와 두 번째 원소의 주소값이 200과 204로, 4의 차이를 나타내고 있습니다. 그 뿐 아니라 모든 주소값이 4씩 늘어나고 있죠. 분명 메모리 상에 연속하게 나열되어 있다고 했으니 200, 201, 202,.. 가 되어야 할 것 같은데 왜 4씩 늘어나는 것일까요?



사실 연속해서 나열되어 있는것이 맞습니다. 다만 배열이 `int`, `char`, `long`, `float`, ... 등등 어떤 타입형의 배열이냐에 따라 각 원소가 차지하는 크기가 달라지게 됩니다.



위 그림은 `int`형의 배열이라고 했었죠? `int`의 크기는 4바이트 입니다. 그렇기 때문에 하나의 공간이 4바이트씩 차지하게 됩니다.



실제로 확인을 해볼까요? 아래의 C코드를 컴파일하고 실행 해봅시다.

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

<<<<<<< HEAD
제 머신에서 실행했을 때의 결과입니다.
<<<<<<< HEAD
=======
실행결과는 이렇습니다.
>>>>>>> bef193f (old posts migrated)
![addresses increasing by 4 bytes](/images/in-post/dsa/array/int-array-memory.png)
=======
![addresses increasing by 4 bytes](/img/in-post/ds-algo/array/20211024-int-array-memory.png)
>>>>>>> 8b1a5f0 (intro to arrays post added)

메모리 주소는 랜덤이기 때문에 제 결과와는 값이 다를겁니다. 각 주소가 4씩 늘어난다는 것만 확인해주세요. 



배열의 이름인 `arr`는 배열의 시작 주소값, 즉 첫 번째 원소의 주소값(**포인터**) 를 가리킵니다. 포인터에 1을 더할 경우(`arr + 1`), 값이 1씩 증가하는 것이 아닌 배열의 타입형의 크기만큼 증가합니다. 

여기서는 `int` 배열이기 때문에 `arr`의 시작 주소값에서 4바이트를 더하여, 
두 번째 원소의 주소를 가리키게 됩니다.



정말로 타입형의 크기만큼 증가하는건지 확인해보고 싶다면, `int`형 배열을 다른 타입형 배열로 정의하고 한 번 실행해보세요.



**포인트**: 배열의 타입에 의해 각 원소의 크기가 결정되며, 이 크기를 이용해서 원소들의 위치를 계산할 수 있다.

## 배열의 크기
C/C++에서 배열은 고정적 크기를 가집니다. 10개의 변수를 담을 배열을 정의한 후, 5개로 줄이거나 20개로 늘릴 수 없습니다.



배열의 크기를 늘리는게 불가능한 이유는 모든 원소들이 메모리 상에 연속되게 나열되어 있기 때문입니다. 메모리에서 마지막 원소가 위치해 있는 그 장소에서 
추가적으로 `N`바이트를 사용할 수 있는지, 다른 데이터가 있지는 않은지, 있으면 덮어써도 되는건지 확신할 수 없기 때문입니다.



크기를 줄이는 것은 문제 없어 보이지만, 이는 컴파일러만이 할 수 있는 일입니다. 때문에 이미 컴파일이 된 프로그램을 실행하는 도중에 컴파일러에게 명령 시키는 것이 불가능합니다.

## 배열의 인덱싱

C/C++에서 배열의 첫 번째 원소의 인덱스는 1번이 아니라 0번 부터 표기하는데, 이를 **제로 베이스 인덱싱 (zero-based indexing)**라고 합니다.
<<<<<<< HEAD
![Array zero-based indexing](/images/in-post/dsa/array/array-indexing.svg)
=======
![Array zero-based indexing](/img/in-post/ds-algo/array/20211024-array-indexing.svg)
>>>>>>> 8b1a5f0 (intro to arrays post added)


## 배열의 장점 

1. 랜덤 액세스가 가능하기 때문에 인덱스를 사용하여 원하는 원소에 빠르게 접근이 가능하다.
2. [캐시 적중률](https://parksb.github.io/article/29.html)이 높다.
3. 다수의 같은 타입의 데이터를 저장할 수 있다.


## 배열의 단점

1. 고정적 크기 - 메모리 상에서 배열의 크기만큼의 연속한 구간을 미리 잡아야해서 제약이 있다.
2. 새로운 데이터의 추가와 제거의 비용이 크다.

## Reference
- [https://www.geeksforgeeks.org/introduction-to-arrays/](https://www.geeksforgeeks.org/introduction-to-arrays/)