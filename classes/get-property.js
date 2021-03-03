'use strict';

class Car {
  constructor(year) {
    this.year = year;
    this.miles = 0;
  }                
  
  drive(distance) {
    this.miles += distance;
  }
  
  get age() {
    return new Date().getFullYear() - this.year;
  }
}

const car = new Car(2007);

console.log(car.age);
car.age = 7;

car.age = 7;
