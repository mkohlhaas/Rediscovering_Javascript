'use strict';

const isPerfect = function(number) {
  let sumOfFactors = 0;

  for(let index = 1; index <= number; index++) {
    if(number % index === 0) {
      sumOfFactors += index;
    }
  }

  return sumOfFactors === number * 2;
}; 

for(let i = 1; i <= 10; i++) {
  console.log('is ' + i + ' perfect?: ' + isPerfect(i));
}
