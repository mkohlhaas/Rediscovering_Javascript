'use strict';

class Car {
  constructor(year) {
    this.year = year;
    this.miles = 0;
  }                
  
  drive(distance) {
    this.miles += distance;
  }

  // Use this when invoking an instance method.
  // Without this Javascript would look for a drive
  // method in the lexical scope of the class definition
  // and not an instance method!
  long_drive() {
    this.drive(100);
  }
}

console.log(Reflect.ownKeys(Car.prototype));

const car = new Car(2018);
console.log(car);

car.drive(10);
console.log(car);

car.long_drive();
console.log(car);
