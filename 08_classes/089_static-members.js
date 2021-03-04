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

  // Of course, the class property getters and setters will not have implicit
  // access to any instance properties, fields, or methods!
  static get ageFactor() { return 0.1; }

  // The keyword this within static getters, static setters, and static methods is
  // dynamically scoped — it does not refer to the instance of the class. When a
  // static member is called on a class, this refers to the class, but if this is
  // bound to some other object by the caller, then this may refer to something
  // other than the class.

  // While we may use this to refer to the static members, it is safer to use the
  // class name, like Car.ageFactor, instead of this.ageFactor — this will prevent
  // us from issues with this referring to something other than the class at
  // runtime due to dynamic scoping.
  static pickBetter(carA, carB) {
    const computeScore = car => 
      car.age * Car.ageFactor + car.distanceTraveled * Car.distanceFactor;
    
    return computeScore(carA) < computeScore(carB) ? carA : carB;
  }
}

// Javascript does not provide an elegant way to define static fields.
// This goes outside class Car {...}!
Car.distanceFactor = 0.01;

const car1 = new Car(2007);
car1.drive(150000);

const car2 = new Car(2010);
car2.drive(175000);

console.log(Car.pickBetter(car1, car2));
