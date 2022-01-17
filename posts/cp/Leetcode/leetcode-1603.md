---
title: "1603. Design Parking System"
from: 'leetcode'
level: 'easy'
---

## C++

```cpp
/**
 * Your ParkingSystem object will be instantiated and called as such:
 * ParkingSystem* obj = new ParkingSystem(big, medium, small);
 * bool param_1 = obj->addCar(carType);
 *
 * Runtime: 84 ms, faster than 90.67%
 * Memory Usage: 33.5 MB, less than 7.82%
 */
class ParkingSystem {
  private:
    int carCapacity[3];
    int cnt[3];
  public:
    ParkingSystem(int big, int medium, int small) {
      carCapacity[0] = big;
      carCapacity[1] = medium;
      carCapacity[2] = small;

      cnt[0] = cnt[1] = cnt[2] = 0;
    }

    bool addCar(int carType) {
      return carCapacity[carType-1] > (cnt[carType-1])++;
    }
};
```

## Ruby
```rb
# Runtime: 88 ms, faster than 74.36%
# Memory Usage: 210.5 MB, less than 6.41%
#
# Your ParkingSystem object will be instantiated and called as such:
# obj = ParkingSystem.new(big, medium, small)
# param_1 = obj.add_car(car_type)
class ParkingSystem
  attr_accessor :cnt, :cntCapacity

=begin
    :type big: Integer
    :type medium: Integer
    :type small: Integer
=end
  def initialize(big, medium, small)
    @cntCapacity = [big, medium, small]
    @cnt = [0, 0, 0]
  end

=begin
    :type car_type: Integer
    :rtype: Boolean
=end
  def add_car(car_type)
    if @cnt[car_type-1] >= @cntCapacity[car_type-1]
      return false
    else
      @cnt[car_type-1] += 1
      return true
    end
  end
end
```

## JavaScript 

```js
/**
 * Runtime: 156 ms, faster than 37.73%
 * Memory Usage: 46.8 MB, less than 20.10%
 */

let cntCapacity;
let cnt;

/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
  cntCapacity = [big, medium, small];
  cnt = [0, 0, 0];
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
  if (cntCapacity[carType-1] == cnt[carType-1]) return false;
  else {
    cnt[carType-1] += 1;
    return true;
  }
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
```