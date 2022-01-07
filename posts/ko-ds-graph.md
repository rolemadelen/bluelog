---
title: "그래프(Graph)"
subtitle: "그래프의 타입과 구현 방식에 대해 알아본다."
date: "2021-07-04"
lang: "ko"
---

## 그래프(Graph) 란

- 노드(정점; vertex)와 노드들을 잇는 간선(edge)을 하나로 모아놓은 비선형 자료구조.
  
## 그래프의 종류
### 단방향 그래프 (Directed Graph)
![images](/images/in-post/dsa/graph/directed-graph.jpg)

정점 `A`와 `C`를 이어주는 간선 `<A, C>`가 있다. 단방향이기 때문에 간선 `<A, C>`와 `<C, A>` 다르다.

### 무방향 그래프 (Undirected Graph)
![images](/images/in-post/dsa/graph/undirected-graph.jpg)

양뱡향으로 이동이 가능하며 정점 `A`와 `C`를 이어주는 간선은 괄호로 표기한다. 간선 `(A, C)`와 `(C, A)`는 동일하다.

### 가중치 그래프 (Weighted Graph)
![images](/images/in-post/dsa/graph/weighted-graph.jpg)

정점 `u`에서 정점 `v`로 이동하는데 드는 비용(`cost`)을 나타내는 그래프이다. 이 '비용'은 각 그래프가 무엇을 나타내는지에 따라 다르다. 최단 거리를 구할때는 거리를 나태내게 되고, 공사 비용을 구할때는 `u` 에서 `v`까지 공사하는데 드는 비용이 될 수도 있다.

## 구현 방식
그래프를 구현할 때 사용하는 방법은 크게 두 가지가 있다: **인접 리스트**와 **인접 행렬**이다.

## 인접 리스트 (Adjacency List)
![images](/images/in-post/dsa/graph/adjacency-list.jpg)

그래프를 구현하는데 있어 가장 일반적으로 사용되는 방법이 바로 인접 리스트라고 한다. 
<br>

### 인접리스트의 특징
1. 간선의 개수가 적을 때 사용하기 좋다.
2. 연결된 간선의 정보만을 저장하기 때문에 공간의 효율성이 좋다. `O(E), E = Edge`
3. 리스트이기 때문에 각 정점의 여부를 확인하는데 `O(V)`의 다소 느린 시간이 걸린다.

### 구현

위 표의 단방향 그래프를 인접리스트로 표현해보자.

```cpp
#include <iostream>
#include <vector>
using namespace std;

// directed graph
void addEdge(vector<int> adj[], int u, int v) {
  adj[u].push_back(v);
}

void printGraph(vector<int> adj[], const int V) {
  for(int v=0; v<V; ++v) {
    printf("\nAdjacency list of vertex %c\nhead ", v+65);
    for(auto x : adj[v]) 
      printf("-> %c", x+65);
    cout << endl;
  }
}

int main() {
  const int V = 6;
  vector<int> adj[V];

  addEdge(adj, 0, 2); // A
  addEdge(adj, 1, 3); // B
  addEdge(adj, 2, 1); // C
  addEdge(adj, 2, 4);
  addEdge(adj, 3, 2); // D
  addEdge(adj, 5, 3); // F
  addEdge(adj, 5, 4);

  printGraph(adj, V);
  return 0;
}
```

출력 결과

```
Adjacency list of vertex A
head -> C

Adjacency list of vertex B
head -> D

Adjacency list of vertex C
head -> B-> E

Adjacency list of vertex D
head -> C

Adjacency list of vertex E
head

Adjacency list of vertex F
head -> D-> E
```

단방향을 양방향으로 바꾸고 싶을때는 `addEdge()` 함수에서 양쪽으로 추가를 해주면 된다.
```cpp
void addEdge(vector<int> adj[], int u, int v) {
    adj[u].push_back(v);
    adj[v].push_back(u); // 양방향
}
```

## 인접 행렬 (Adjacency Matrix)
![images](/images/in-post/dsa/graph/adjacency-matrix.jpg)

인접 행렬은 정점들을 2차원 배열 형태로 구현하는 방식이다.
<br>

### 인접 행렬의 특징 
1. 간선의 개수가 많은 밀집 그래프의 경우 사용하는 것이 좋다.
2. 정점간의 연결 여부는 인덱스를 사용해서 O(1)으로 확인이 가능하다.
3. 간선의 개수에 상관없이 `O(N^2)`의 공간을 사용한다.

무방향 그래프를 인접 행렬로 구현할 경우, 아래와 같이 대각선을 기준으로 대칭이 되는 것을 확인할 수 있다.
![images](/images/in-post/dsa/graph/adjacency-matrix-2.jpg)

### 구현 

구현에 있어서는 인접리스트와 비슷하기 때문에 `addEdge()`함수 부분만 살펴본다. 

```cpp
void addEdge(int adj[][V], int u, int v, bool isUndirected) {
  adj[u][v] = 1;
  // 양방향의 경우 아래를 추가
  // adj[v][u] = 1;
}
```

## Reference
- [[Data Structure] 자바스크립트로 그래프 Graph 구현하기](https://velog.io/@nomadhash/Data-Structure-자바스크립트로-그래프-Graph-구현하기)
- [Graph and its representations](https://www.geeksforgeeks.org/graph-and-its-representations/)