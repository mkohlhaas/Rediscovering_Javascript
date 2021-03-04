'use strict';

class Car {
  constructor(year) {
    this.year = year;
    this.miles = 0;
  }                
  
  drive(distance) {
    this.miles += distance;
  }
  
  getAge() {
    return new Date().getFullYear() - this.year;
  }
}

const car = new Car(2007);

console.log(car.getAge());
