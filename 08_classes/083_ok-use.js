'use strict';

const createCar = function() {
  return new Car();
};

class Car {}

console.log(createCar());
