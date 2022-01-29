---
title: "Dijkstra + MinHeap"
section: "C++"
date: "2022-01-29"
---


```c++
#define INF 0x7FFFFFFF

/*
 * V = number of verticies
 * src = Starting vertex
 * graph = adjacency list <src, dest>
*/
void dijkstra(int V, int src, vector<vector<pair<int,int>>> &graph;)
{
  vector<int> dist(V, INF);
  dist[src] = 0;

  priority_queue<int> pq;
  pq.push(src);

  while(!pq.empty())
  {
    int r = pq.top();
    pq.pop();

    for(auto &v : graph[r])
    {
      int cost = dist[r] + v.second;
      if(dist[v.first] > cost)
      {
        dist[v.first] = cost;
        pq.push(v.first);
      }
    }
  }
}
```