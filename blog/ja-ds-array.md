---
title: "配列 (Array)"
subtitle: "配列というのは？ 配列の機能は？"
date: "2021-05-10"
lang: "ja"
tags:
- arrays
---


# 配列 (Array)

配列データ構造とは、メモリ上にデータを連続して配置したデータ構造のことです。
![array](/images/in-post/dsa/array/array.png)


## 配列の特性 
1. データのアクセス及び変更の時間は **O(1)** だ。
2. [メモリオーバーヘッド](https://wa3.i-3-i.info/word12471.html)がほぼない。
3. [キャッシュヒット率](https://www.cloudflare.com/ja-jp/learning/cdn/what-is-a-cache-hit-ratio/)が高い。
4. 配列のメモリを確保するためには、連続した区間の配列の大きさ分のスペースが必要なのでメモリ割り当てに制約がある。

## 配列の機能

### データのアクセス及び変更: O(1)
![array access/modify](/images/in-post/dsa/array/array-access-modify.png)

indexを使用し任意のデータに直接アクセスして、データを出力したり変更したりできます。

```cpp
int size = 8;
int arr[size] = {1, 1, 2, 3, 5, 9, 13, 21};
arr[5] = 8; // O(1)
```

### 配列の最後に追加: O(1)
配列のサイズを一つ増やします。そして、データを最後に代入するだけなので O(1) になります。

![array pushback](/images/in-post/dsa/array/array-pushback.png)

### 配列の最後の除去: O(1)
配列のサイズを一つ小さくします。そうしたら、最後のデータを除去することと同じ効果が得られます。

![array pop back](/images/in-post/dsa/array/array-popback.png)


### 任意の位置にデータ挿入: O(N) 
![array insert at](/images/in-post/dsa/array/array-insertat.png)

配列の中間に挿入する場合、そのデータにアクセスすることまでは他の機能と同じく O(1) の時間にできます。
だが、新しいデータを挿入する位置以降にあるすべてのデータを１ブロック右側に移動させなければなりません。
そのために O(N) の時間がかかります。

```cpp
void insertAt(int index, int data, int *arr, int &len) {
  int temp = len; 
  while(temp >= index) {
    arr[temp] = arr[temp-1];
    --temp;
  }

  arr[temp] = data;
  ++len;
}
```

### 任意の位置のデータ除去: O(N)
![array delete at](/images/in-post/dsa/array/array-deleteat.png)

配列の中間からの除去も同じです。
アクセスまでは O(1) の時間できますが、除去した後すべてのデータを１ブロック左側に移動する作業が必要なので O(N) の時間がかかります。



```cpp
void removeAt(int index, int *arr, int &len) {
  for(int i=index-1; i<len; ++i) 
    arr[i] = arr[i+1];

  --len;
}
```

## Reference
- [https://blog.encrypted.gg/927?category=773649](https://blog.encrypted.gg/927?category=773649)