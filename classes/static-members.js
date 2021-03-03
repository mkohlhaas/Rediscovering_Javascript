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

  static get ageFactor() { return 0.1; }

  static pickBetter(carA, carB) {
    const computeScore = car => 
      car.age * Car.ageFactor + car.distanceTraveled * Car.distanceFactor;
    
    return computeScore(carA) < computeScore(carB) ? carA : carB;
  }
}

Car.distanceFactor = 0.01; //This goes outside class Car {...}

const car1 = new Car(2007);
car1.drive(150000);

const car2 = new Car(2010);
car2.drive(175000);

console.log(Car.pickBetter(car1, car2));
