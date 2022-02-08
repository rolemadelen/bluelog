---
title: "BFS & DFS - vector<set>"
section: "C++"
date: "2022-02-08"
---

- Uses adjacency list `vector<set<int>>`
- used `set<int>` to visit neighbors with a smaller value first in the frontier.

## DFS

```c++
vector<bool> v;
vector<set<int>> graph;

void dfs(int &u) {
  v[u] = true;

  cout << u << ' ';

  for(auto it = graph[u].begin(); it != graph[u].end(); ++it) {
    if(v[*it] == false) {
      int _u = *it;
      dfs(_u);
    }
  }
}
```

## BFS

```c++
vector<bool> v;
vector<set<int>> graph;

void bfs(int &u) {
  queue<int> q;
  q.push(u);
  v[u] = true;

  while(!q.empty()) {
    int f = q.front();
    q.pop();

    cout << f << ' ';

    for(auto it = graph[f].begin(); it != graph[f].end(); ++it) {
      if (!v[*it]) {
        q.push(*it);
        v[*it] = true;
      }
    }
  }
}
```