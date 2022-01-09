---
from: 'leetcode'
level: 'medium'
---

## Ruby

```rb
class LRUCache
  def initialize(capacity)
    @capacity = capacity
    @cache = {}
  end

  def get(key)
    return -1 if @cache[key] == nil

    value = @cache[key]
    @cache.delete(key)
    @cache[key] = value
    @cache.shift if @cache.length > @capacity
    return value
  end

  def put(key, value)
    @cache.delete(key)
    @cache[key] = value
    @cache.shift if @cache.length > @capacity
  end
end
```