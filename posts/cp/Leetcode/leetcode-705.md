---
title: "705. Design HashSet"
from: 'leetcode'
level: 'easy'
---

[https://leetcode.com/problems/design-hashset/](https://leetcode.com/problems/design-hashset/)

## Approach
Use single array (the troll way).
Create a table one more than the MAX_INPUT for the key and use a simple `key % TABLE_SIZE` to hash the key. 

## Solution
```cpp
class MyHashSet {
public:
    bool *hashtable;
    int SIZE = 1000001;
    /** Initialize your data structure here. */
    MyHashSet() {
        hashtable = new bool[SIZE];
        fill(hashtable, hashtable + SIZE, false);
    }
    
    void add(int key) {
        hashtable[key%SIZE] = true;
    }
    
    void remove(int key) {
        hashtable[key%SIZE] = false;
    }
    
    /** Returns true if this set contains the specified element */
    bool contains(int key) {
        return hashtable[key%SIZE];
    }
};
```

## Time Complexity
O(1)

## Space Complexity
O(N)

---

## Better design?
Using a single array is perfectly fine from a CP programmer view in my opinion, but if you're tackling this question as for preparing a coding interview, then you might need to comp up with a better solution.

1. BST solution - [https://leetcode.com/problems/design-hashset/discuss/179164/C%2B%2B-97.97-without-a-massive-array-or-using-a-map-BST](https://leetcode.com/problems/design-hashset/discuss/179164/C%2B%2B-97.97-without-a-massive-array-or-using-a-map-BST)
2. 3 different approaches - [https://leetcode.com/problems/design-hashset/discuss/773006/C%2B%2B-3-Approaches](https://leetcode.com/problems/design-hashset/discuss/773006/C%2B%2B-3-Approaches)

## Basic Hash Implementation
```cpp
class MyHashSet {
private:
    int prime;
    vector<list<int>> table;
    
    int hash(int key) {
        return key % prime;
    }
    
    list<int>::iterator search(int key) {
        int h = hash(key);
        return find(table[h].begin(), table[h].end(), key);
    }
    
public:
    /** Initialize your data structure here. */
    MyHashSet() : prime(10007), table(prime) {}
    
    void add(int key) {
        int h = hash(key);
        if(!contains(key))
            table[h].push_back(key);
    }
    
    void remove(int key) {
        int h = hash(key);
        auto it = search(key);
        if (it != table[h].end())
            table[h].erase(it);
    }
    
    /** Returns true if this set contains the specified element */
    bool contains(int key) {
        int h = hash(key);
        return search(key) != table[h].end();
    }
};
```

## Time Complexity
O(N), average O

## Space Complexity
O(N)
