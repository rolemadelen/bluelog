---
title: "1268. Search Suggestions System"
from: 'leetcode'
level: 'medium'
---

## C++

```cpp
class Solution {
  public:
    vector<vector<string>> suggestedProducts(vector<string>& products, string searchWord) {
      sort(products.begin(), products.end());
      vector<vector<string> > answer;
      bool wasIt = false;

      int i=0;
      for(char ch : searchWord) {
        vector<string> temp, re;

        for(string str : products) {
          if(str.size() <= i) continue;
          if(str[i] == ch) {
            temp.push_back(str);
          }
        }

        for(int j=0; j<3 && j<temp.size(); ++j) 
          re.push_back(temp[j]);

        answer.push_back(re);
        products = temp;
        ++i;
      }

      return answer;
    }
};
```