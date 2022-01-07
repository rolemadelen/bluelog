---
title: "해시(Hash) 란"
subtitle: "임의의 크기의 데이터를 고정된 길이를 가진 데이터로 매핑(mapping)한 값."
date: "2021-07-24"
lang: "ko"
---

# 해시(Hash) 란
해시는 임의의 크기를 가진 데이터를 고정된 길이를 가진 데이터로 변환 -- 매핑(mapping) -- 시키는 것을 의미한다.

<br>

해시를 사용하여 입력하고자 하는 데이터의 값을 이용해, 데이터의 위치를 저장하거나 찾을 수 있다. 배열, 연결리스트, 트리, 등등의 자료 구조들은 보통 탐색이나 삽입에 선형시간이 걸리는것에 비해, 해시를 이용하면 찾고자 하는 위치를 **해시값**을 이용해 즉시 참조할 수 있으므로 더욱 빠른 속도로 처리가 가능하다.


# 해시의 특징
## 1. 무결성

무결성이란 특정한 데이터를 정상적인 상태로 유지하는 성질을 의미한다. 간단하게는 데이터의 정확성과 일관성을 보장한다는 의미라고 생각해도 좋다.

<br>

예를들어 `ABC`라는 문자열과 `ABD`라는 문자열은 고작 한 문자가 다를뿐이지만 해시값은 전혀 다르게 된다. 이렇게 원래의 데이터가 조금만 바뀌어도 매핑되는 값이 확연히 달라지기 때문에 무결성을 지키는데 많은 도움을 준다.

## 2. 보안성 
해시는 기본적으로 복호화가 불가능하도록 설계가 되었다. 애초에 입력 데이터 집합이 출력 데이터 집합을 포함하고 있기 때문에, 동일한 입력 데이터는 항상 같은 출력값을 반환하지만 그 반대가 항상 성립하지 않는다. 동일한 출력 값을 만들어낼 수 있는 입력 값의 가짓수는 수학적으로 무한개라고 볼 수 있는데, 이는 압축률이 무한인 압축 알고리즘과도 같다.

<br>

해시 복호화의 관한 글 - [해시값의 복호화??](https://jusungpark.tistory.com/35)

## 3. 비둘기집 원리

3x3인 공간에 비둘기를 한 마리 씩 집어넣는다고 했을 때, 아무리 균등하게 분배해도 10번째 비둘기가 들어가는 어느 한 공간에는 반드시 한 마리 이상의 비둘기가 존재하게 된다. 이를 **비둘기집 원리 (Pigeonhole Principle)** 라고 말한다.

![images](/images/in-post/dsa/hash/pigeonhole.png)

img ref: https://www.cantorsparadise.com/the-pigeonhole-principle-e4c637940619

<br>

해시는 임의의 크기를 가진 데이터를 고정된 길이를 가진 데이터로 변환하는 특징을 가지고 있다. 이 고정된 길이가 무한은 아니기 때문에, 어느정도 데이터가 쌓이다 보면, 비둘기집 원리에 의해 두 입력 값의 해시 값이 동일한 경우가 생기게 된다. 이를 해시에서는 **해시 충돌**(서로 다른 입력 값의 해시 결과 값이 동일한 문제)라고 말한다.

# 해시 방법

## 1. Direct Address Table

<div>
![images](./images/in-post/dsa/hash/dat.png)
<span style="font-size: 10px; display: block; text-align: right;"> 
img ref: CLRS
</span>
</div>

Direct address table(이하 DAT)은 배열에 저장할 key:value페어의 데이터에서 `key`를 직접적으로 배열의 인덱스로 사용하는 것이다. 예를들어, `key`가 `10007`인 데이터가 있으면 `arr[10007]`에 해당 데이터를 저장하는 방식이다. 

<br>

이 구조의 장점으로는 검색, 삽입, 그리고 제거가 모두 O(1)에 가능하다는 부분에있다. 하지만 DAT의 단점은 메모리 낭비가 심하다는 것이다. 데이터 `10007`단 한 개를 저장하기 위해 `10006`개의 안쓰이는 공간을 만들어야 한다. 

<br>

그렇기 때문에 `key`의 최대 크기를 알고 있고, 그 크기가 작은편에 속한게 아니라면 사용하지 않는 것이 좋다.

<br>

```cpp
class DAT {
  private:
    static const int MAX_KEY = 1000;
    bool table[MAX_KEY];

  public:
    DAT() {
      fill(table, table + MAX_KEY, false);
    }

    bool search(int key) {
      return table[key];
    }

    void insert(int key) {
      table[key] = true;
    }

    void remove(int key) {
      table[key] = false;
    }
};
```

## 2. 해시 테이블(Hash Table)

Direct Address Table의 경우 key의 최대 입력값이 너무 크거나, key의 최대크기로 할당된 테이블에 비해 실제 저장되는 데이터가 별로 없을경우 아주 비효율적이다. 이런 단점들은 **해시 테이블(Hash Table)**을 사용하면 해결할 수 있다.

<br>

해시 테이블의 경우 key:value페어에서 `key`를 인덱스로 사용해서 바로 저장했던 DAT와는 다르게 `h(key)`를 사용한다.

<br>

`h(key)`는 **해시 함수(Hash Function)**로써 `key`를 고정된 길이의 데이터로 변환시키는 함수이다. 예를들어 테이블의 크기가 `10`이라면, `h(key)`는 `key`를 `0~9`사이의 숫자로 변환한 값을 반환한다.

<br>

```cpp
class HashTable {
  private:
    static const int TABLE_SIZE = 10;
    int table[TABLE_SIZE];

    int hash(int key) {
      return key % TABLE_SIZE;
    }

  public:
    HashTable() {
      std::fill(table, table + TABLE_SIZE, -1);
    }

    void insert(int key) {
      int h = hash(key);
      if(table[h] == -1)
        table[h] = key;
    }

    void remove(int key) {
      int h = hash(key);
      int v = search(key);
      if (v != -1) 
        table[h] = -1;
    }

    bool search(int key) {
      int h = hash(key);
      return table[h] != -1;
    }
};
```

### 2.1 충돌(Collision)
해시 함수 `h`는 일대일 함수가 아니기 때문에 다수의 `key`들이 동일한 해시값을 가져 같은 공간에 저장이 될 수가 있다. 예를들어 `h("Hello")`, `h("Hey")`, `h("Hi")`가 전부 같은 해시값(`'H'`)를 반환 할 수 있다. 이렇게 다른 입력 데이터가 동일한 해시값을 가져 동일한 공간에 저장되는 경우를 **충돌(collision)**이라고 한다.

#### Chaining
충돌을 대비하는 방법 중 하나로는 **체이닝(chaining)** 기법이 있다.

![images](/images/in-post/dsa/hash/chaining.png)
ref: CLRS

체이닝이란 이름 그대로 데이터와 데이터들을 연결 리스트처럼 체인으로 엮어주는 것을 의미한다. 해시 테이블에서 동일한 해시값으로 충돌이 일어나면, 그 공간에 있던 기존에 데이터들을 새로운 데이터의 포인터로 연결해준다. 따라서 최초로 `h(key)` 위치에 저장된 데이터를 시작으로, 그 이후 같은 공간에 들어오는 데이터들은 모두 연결 리스트의 형태를 취한다.

<br>

연결리스트의 형태이기 때문에 삽입, 제거, 탐색의 시간 복잡도는 연결 리스트와 유사한 방식을 취한다.
삽입과 제거의 경우 모두 `O(1)`의 시간을 가지고, 탐색은 모든 데이터들이 동일한 해시값을 가지는 최악의 경우 때문에 `O(n)`의 시간 복잡도를 갖게된다.

<br>

하지만 평균적으로는 `O(1 + α)`의 시간이 걸린다. `α`(알파)는  `N / M`으로 **적재율(load factor)**를 의미한다. `N` 은 key의 총 갯수이고 `M`은 테이블의 크기다.

#### SUHA (Simple Uniform Hash Assumption)

충돌이 적은 좋은 해시 함수를 만드는 것도 충돌을 최소하하는 방법 중 하나이다. 좋은 해시 함수는 Simple Uniform Hash의 가정을 만족한다.

- 가정 1) 테이블 각각의 공간에 해시된 데이터가 들어올 확률은 모두 동일하다.
  - => 충돌이 일어날 확률을 줄인다.
- 가정 2) 각각의 해시값들은 서로 연관성을 가지지 않는다.
  - => 연관성이 없다는 것은 패턴이나 순서가 존재하지 않다는 것. 즉, 반복적인 충돌을 줄일 수 있다.

#### Division Method

해시 함수에서 대표적으로 사용되는 방법으로 `h(k) = k % m`와 같은 모습을 가지는데, 바로 모듈러(`%`) 연산을 활용하는 방법이다.
예를들어 `k = 100`, `m = 12`라면 `h(k) = 4`가 된다.

<br>

`m`의 값에 따라서 해시 함수의 성능이 달라진다. 예를들어 `m = 2`의 경우, 데이터의 첫 번째 비트만 확인하는 것이 되기 때문에 좋은 해시 함수라고 볼 수 없다.
보통 소수를 많이 사용하는데 예를들면 `10007`이 있다.

<br>

```cpp
const int PRIME = 10007;

int hash(int key) {
    return key % PRIME;
}
```

#### Knuth Multiplicative Hash

곱셈을 사용하는 방식도 존재하는데 형태는 이렇다: `h(k) = ⌊m(kA mod 1)`.

<br>

여기에서는 `m`보다 `A`의 값이 더 중요한데 Knuth라는 분의 말에 의하면 `(root(5) − 1)/2`의 값이 잘 먹힌다(?)고 한다.
하지만 실제 알고리즘의 구현을 보니 아래와 같이 `2654435769`에 근접한 숫자인 `2654435761`가 사용된다.

<br>

```cpp
uint32_t hash(uint32_t v)
{
    v *= UINT32_C(2654435761);
    return v >> 32;
}
```

자세한 정보는 [여기](https://newbedev.com/knuth-multiplicative-hash)를 참고.

## 3. Open Addressing

Open addressing을 사용하는 해시 테이블의 각 공간은 리스트가 아닌, 하나의 원소 또는 <i>null</i>이다.
포인터를 사용하지 않기 때문에 데이터 접근 속도 성능 향상 및 메모리 오버헤드의 방지가 가능하다.

### 3.1 Linear Probing
데이터를 해시테이블에 추가 할때 해당 공간이 <i>null</i>이면 바로 추가하고, 원소가 이미 있을 경우 다음 빈 공간을 찾아 저장하게 된다.

<br>

예를 한 번 살펴보자. 여기서 사용된 해시 함수는 `h(k) = k % 7`이다.

![linear probing](/images/in-post/dsa/hash/linear-probing.svg)

해시 테이블에 17, 28, 78, 48순으로 집어넣으면, 왼쪽 첫 번째와 같이 데이터가 들어가게 된다.

여기서 `insert(55)`를 하면 해당 데이터는 `55 % 7 = [6]`에 들어가려고 하지만 충돌이 일어난다. 충돌을 피하기 위해 
다음 공간을 하나씩 확인한다. `[7]`이 비어있기 때문에 해당 공간에 `55`가 들어가게 된다.

<br>

하지만 이는 효율적인 방법은 아니다. 예를들어 `[6]` 부터 `[1000]`까지 꽉 차 있다고 가정하면, 먼저 `55 % 7 = [6]`을 확인하게 된다. 
`[6]`에는 다른 원소가 들어있어 충돌이 일어난다. 이를 파히기 위해 다음 원소를 확인하는데 그곳에서도 충돌이 일어난다. 결국 이를 반복하면 
`[1001]`번이 되어서야 우리는 데이터를 테이블에 집어넣을 수 있게 된다. 이렇게 한 쪽에 밀집하게 되는 현상을 **primary cluster**라고 한다.


### 3.2 Qudratic Probing
Linear probing에서 primary cluster 현상을 방지하기 위한 것으로, 해시 함수를 이용한다.

<br>

`h(k,i) = (h'(k) + i*(c1) + (i^2)*c2) mod m`

<br>

충돌이 일어났을 때 한 칸이 아닌 `i*(c1) + (i^2)*c2)`칸 만큼 움직이기 때문에 밀집 현상이 일어나지 않지만 `c`의 값을 잘 설정해야 한다.
또한 두 데이터의 초기 시작 해시값이 같을 경우, 충돌 시 이동하는 패턴이 똑같기 때문에 충돌이 반복되는 현상이 일어나게 된다. 그러면 linear probing보다 빈도만 살짝 낮을 뿐 결국 primary cluster (여기서는 **secondary cluster**) 현상이 일어나게 되는 것과 같다.

### 3.3 Double Hashing

Quadratic probing에서 일아나는 secondary cluster 문제를 해결하기 위한 방법으로, 해시 함수가 두 개의 해시 함수를 이용하는 방법이다.

<br>

예를들면 아래와 같다.
```
h1(k) = k mod m1
h2(k) = 1 + (k mod m′), m′ < m (살짝 작은 수)

h(k, i) = (h1(k) + i*h2(k)) mod m
```

이와 같은 방법으로 도출되는 순열은 무작위 순열의 특성을 어느정도 가지게 되기 때문에 균등하게 원소가 테이블에 배치하게 된다.

## Reference
- [https://hsp1116.tistory.com/35](https://hsp1116.tistory.com/35)
- [https://web.stanford.edu/class/archive/cs/cs161/cs161.1168/lecture9.pdf](https://web.stanford.edu/class/archive/cs/cs161/cs161.1168/lecture9.pdf)