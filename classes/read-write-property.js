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

  get distanceTraveled() { return this.miles; }

  set distanceTraveled(value) {
    if(value < this.miles) {
      throw new Error(
        `Sorry, can't set value to less than current distance traveled.`);
    }

    this.miles = value;
  }
}

const car = new Car(2007);
car.drive(10);

console.log(car.distanceTraveled);

car.distanceTraveled = 14;
console.log(car.distanceTraveled);

try {
  car.distanceTraveled = 1;
} catch(ex) {
  console.log(ex.message);
}
