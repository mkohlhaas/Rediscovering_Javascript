'use strict';
          
const proxy = new Proxy(Set.prototype, {
  get: function(target, propertyName, receiver) {
    return receiver.has(propertyName);
  }
});

Reflect.setPrototypeOf(Set.prototype, proxy);
                                           
const fruits = new Set(['Apple', 'Banana', 'Orange', 'Jack Fruit']);
                         
console.log(fruits.size);           //4
console.log(fruits.Apple);          //true
console.log(fruits.Banana);         //true
console.log(fruits.Orange);         //true
console.log(fruits['Jack Fruit']);  //true
console.log(fruits.Tomato);         //false
