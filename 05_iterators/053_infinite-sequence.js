'use strict';

const isPrime = function(number) {
  for(let i = 2; i < number; i++) {
    if(number % i === 0) return false;
  }
  
  return number > 1;
};

const primesStartingFrom = function*(start) {
  let index = start;
  
  while(true) {
    if(isPrime(index)) yield index;
    index++;
  }
};
            
for(const number of primesStartingFrom(1)) {
  process.stdout.write(number + ', ');
  if(number > 89) break;
}
