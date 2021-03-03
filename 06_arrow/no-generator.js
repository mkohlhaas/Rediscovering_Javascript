'use strict';

const isPrime = function(number) {
  for(let i = 2; i < number; i++) {
    if(number % i === 0) return false;
  }
  
  return number > 1;
}

const primesStartingFrom = *(start) => { //Will not work
  //...
  let index = start;
  
  while(true) {
    if(isPrime(index)) yield index;
    index++;
  }
}
