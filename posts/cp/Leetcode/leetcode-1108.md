---
title: "1108. Defanging an IP Address"
from: 'leetcode'
level: 'easy'
---

## C++

```cpp
class Solution {
public:
    string defangIPaddr(string address) {
        string s = "";
        for(int i=0; address[i]; ++i)
        {
            if(address[i] != '.') s += address[i];
            else 
            {
                s += "[.]";
                
            }
        }
        
        return s;
    }
};
```

## JavaScript
```js
var defangIPaddr = function(address) {
    const regex = /\./gi;
    return address.replace(regex, '[.]');
};
```

## Ruby
```rb
def defang_i_paddr(address)
    i = 1
    while (i < address.length) do
        if address[i-1] == '.'
            address.insert(i-1, '[')
            address.insert(i+1, ']')
            i += 2
        end
        i += 1
    end
    address
end
```