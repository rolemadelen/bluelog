---
from: 'programmers'
level: 'easy2'
---

# 소수 찾기

[https://programmers.co.kr/learn/courses/30/lessons/42839](https://programmers.co.kr/learn/courses/30/lessons/42839)

## Approach
순열을 모두 구한 뒤, 각 값이 소수인지 판별.

## Issues 
순열 구하는 알고리즘을 모른다! 

내부 함수인 `next_permutation`도 주어진 문자열과 같은 크기의 순열을 반환 할 뿐, 다른 크기의 문자열을 반환하지는 않는다. 

어떻게 크기가 다른 문자열의 조합을 구할지에 대해서 시간을 좀 많이 소비했다. 

## Solution

```cpp
#include <bits/stdc++.h>
using namespace std;

set<int> myset;

// O(sqrt N)
bool isPrime(int n) {
    if(n < 2) return 0;
    if(n <= 3) return 1;
    
    if(n%2==0 || n%3==0) return 0;
    
    for(int i=5; (i*i)<=n; i+=6)
        if(n%i==0 || n%(i+2)==0) return 0;
    
    return 1;
}

// O(S * 2^S)
void permutate(string str)
{
  int n = str.length();
  unsigned opsize = pow(2, n);

  for (int i = 1; i < opsize; i++) // O(2^S)
  {
    string subs = "";
    for (int j = 0; j < n; j++) // O(S)
      if (i & (1<<j))
        subs.push_back(str[j]);

    do
    {
      myset.insert(stoi(subs)); // O(S)
    } while (next_permutation(subs.begin(), subs.end())); // O(S/2) => O(S)
  }
}

int solution(string numbers) {
    sort(numbers.begin(), numbers.end()); // O(N * log(N))
    permutate(numbers); // O(N * 2^N)
    int answer = 0;
    
    // O(M * sqrt(M)), M = number of items in the set
    for(auto it=myset.begin(); it != myset.end(); ++it)
        if(isPrime(*it)) 
            ++answer;
    
    return answer;
}
```

## Time Complexity
- O(N * logN) + O(S * 2^S) + O(M * sqrt(M)),  S = length of a string, M = number of items in the set
  + => **O(N * 2^N)**
  
## Space Complexity
- O(S), S = number of items in the set
