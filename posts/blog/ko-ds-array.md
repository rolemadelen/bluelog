---
title: "배열 (Array)"
subtitle: "배열의 기본 성질과 기능에 대해 알아본다"
date: "2021-05-10"
lang: "ko"
tags: 
- arrays
---


## Array (배열)

- 메모리 상에 원소를 연속하게 배치한 자료구조
![array](/images/in-post/dsa/array/array.png)


### 배열의 성질 
1. 원소에 접근 및 변경에 걸리는 시간은 O(1)이다
2. 메모리 오버헤드가 거의 없다
3. [Cache hit rate](https://parksb.github.io/article/29.html)가 높다
4. 메모리 상에서 배열의 크기만큼의 연속한 구간을 미리 잡아야해서 할당에 제약이 걸린다

### 배열의 기능
여기서의 배열은 크기가 자동적으로 늘어나고 줄어드는 가변 크기 배열이라고 가정하고 설명합니다.

#### 임의의 원소에 접근 및 변경: O(1)
![array access/modify](/images/in-post/dsa/array/array-access-modify.png)

index를 사용하여 임의의 원소에 바로 접근하여 값을 출력하거나 변경하거나 할 수 있습니다.

```cpp
int size = 8;
int arr[size] = {1, 1, 2, 3, 5, 9, 13, 21};
arr[5] = 8; // O(1)
```

#### 리스트 마지막에 원소 추가: O(1)
배열의 크기를 1증가시키고 값을 대입하면 되기 때문에 O(1)이 된다.

![array pushback](/images/in-post/dsa/array/array-pushback.png)

#### 리스트의 마지막 원소 삭제: O(1)
맨 끝에 원소를 삭제하는 건 간단히 배열의 길이를 하나 줄여주면 된다.

![array pop back](/images/in-post/dsa/array/array-popback.png)


#### 임의의 위치에 원소 삽입: O(N) 
![array insert at](/images/in-post/dsa/array/array-insertat.png)

중간에 삽입하는 경우, 해당 원소에 접근하는 것 까지는 O(1)에 가능합니다.
하지만 새로운 데이터 삽입을 위해, 해당 위치에서 부터 그 이후에 있는 모든 원소들을 한 칸씩 밀어주어야 합니다.
예를들어 맨 처음에 원소를 삽입하기 위해서는, 모든 원소들을 한 칸씩 오른쪽으로 밀어주는 과정이 필요합니다.
그래서 O(N)의 시간이 걸립니다.

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

#### 임의의 위치의 원소 삭제: O(N)
![array delete at](/images/in-post/dsa/array/array-deleteat.png)

삭제도 삽입과 마찬가지로 해당 원소에 접근하는 것 까지는 O(1)입니다.
하지만 원소를 삭제한 후, 그 뒤에 있는 모든 원소들을 한 칸씩 옮겨주는 작업이 필요하기 때문에 삭제도 평균적으로 O(N)의 시간이 걸립니다.

```cpp
void removeAt(int index, int *arr, int &len) {
  for(int i=index-1; i<len; ++i) 
    arr[i] = arr[i+1];

  --len;
}
```

### 연습 문제
- [10808. 알파벳 개수](https://www.acmicpc.net/problem/10808)
- [10807. 개수 세기](https://www.acmicpc.net/problem/10807)
- [11328. Strfry](https://www.acmicpc.net/problem/11328)
- [3273. 두 수의 합](https://www.acmicpc.net/problem/3273)

---

#### 10808. 알파벳 개수 [code](https://www.acmicpc.net/problem/10808)
```cpp
#include <bits/stdc++.h>
using namespace std;

int main(void) {
  int alphabet[26] = {0};
  string s;
  cin >> s;

  // O(n), n = length of 's'
  for(char c : s) ++alphabet[c - 'a'];

  for(int i=0; i<26; ++i)
    printf("%d ", alphabet[i]);

  return 0;
}
```

#### 10807. 개수 세기 [code](https://www.acmicpc.net/problem/10807)
```cpp
#include <bits/stdc++.h>
using namespace std;

int a[101];
int main(void){
  int n, v, cnt=0;
  scanf("%d", &n);
  for(int i=0; i<n; ++i) 
    scanf("%d", &a[i]);
  scanf("%d", &v);

  // O(n)
  for(int i=0; i<n; ++i) 
    if(a[i] == v) ++cnt;

  printf("%d\n", cnt);

  return 0;
}
```

#### 11328. Strfry [code](https://www.acmicpc.net/problem/11328)

```cpp
// O(n + m)
#include <bits/stdc++.h>
using namespace std;

int main(void) {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int n;
  cin >> n;
  while(n--) {
    string a, b;
    cin >> a >> b;

    int alphaA[26] = {0};
    int alphaB[26] = {0};

    // O(n + m)  
    // O(n), n = length of 'a'
    for(char c : a) ++alphaA[c - 'a'];
    // O(m), m = length of 'b'
    for(char c : b) ++alphaB[c - 'a'];

    // O(m), length of 'b'
    string s = "Possible";
    for(char c : b) {
      if(alphaA[c - 'a'] != alphaB[c - 'a']) {
        s = "Impossible";
        break;
      }
    }

    cout << s << endl;
  }
  return 0;
}
```

#### 3273. 두 수의 합 [code](https://www.acmicpc.net/problem/3273)
```cpp
#include <bits/stdc++.h>
using namespace std;

int main(void) {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int n, x, t, cnt=0;
  vector<int> a;
  scanf("%d", &n);
  for(int i=0; i<n; ++i) {
    scanf("%d", &t);
    a.push_back(t);
  }
  scanf("%d", &x);

  // O(n log n)
  sort(a.begin(), a.end());

  // O(n^2)
  for(int i=0; i<n-1; ++i) {
    for(int j=i+1; j<n; ++j) {
      if(a[i] + a[j] == x) ++cnt;
      else if(a[i] + a[j] > x) break;
    }
  }

  printf("%d\n", cnt);
  return 0;
}
```

## Reference
- [https://blog.encrypted.gg/927?category=773649](https://blog.encrypted.gg/927?category=773649)