'use strict';

class Car {
  constructor(year) {
    this.year = year;
    this.miles = 0;
  }                
  
  drive(distance) {
    this.miles += distance;
  }
}

console.log(Reflect.ownKeys(Car.prototype));

const car = new Car(2018);
console.log(car);

car.drive(10);
console.log(car);
