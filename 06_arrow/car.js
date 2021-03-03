'use strict';

//function Car(year) {
//or
const Car = function(year) {
  this.year = year;
};                  

const car1 = new Car(2018);

console.log(car1.year);
