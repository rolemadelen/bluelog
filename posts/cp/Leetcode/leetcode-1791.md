---
title: "1791. Find Center of Star Graph"
from: 'leetcode'
level: 'easy'
---

## C++ Solution 1: Adjacency List

Used Adjacency List to recreate the graph. Then, found which vertex has the max neigbor.

```cpp
class Solution {
  public:
    int findCenter(vector<vector<int>>& edges) {
      const int V = edges.size() + 1;
      vector<int> g[V];

      for(int i=0; i<V-i; ++i) {
        int u = edges[i][0];
        int v = edges[i][1];

        g[u-1].push_back(v-1);
        g[v-1].push_back(u-1);
      }

      int mx = -1;
      int mxV = -1;

      for(int i=0; i<V; ++i) {
        int temp = g[i].size();
        if(temp > mx) {
          mx = temp;
          mxV = i+1;
        }
      }

      return mxV;
    }
};
```

## C++ Solution 2: Star graph

The fact that the given graph is a **star graph**, we only need to check first 2 edges and
whichever vertex shows up twice, has to be the center.

```cpp
class Solution {
  public:
    int findCenter(vector<vector<int>>& edges) {
      int v[] = {edges[0][0], edges[0][1], edges[1][0], edges[1][1]};
      return (v[0]==v[2] || v[0]==v[3]) ? v[0] : v[1];
    }
};
```
