//The code as given in the exercise will not terminate.

//Here's the fix: use option strict and declare i before use in the two loops
'use strict';

const isPrime = function(n) {
  for(let i = 2; i <= Math.sqrt(n); i++) {//or < n instead of <= Math.sqrt(n)
    if(n % i === 0) return false;
  }
  
  return n > 1;
}; 

const sumOfPrimes = function(n) {
  let sum = 0;
  for(let i = 1; i <= n; i++) {
    if(isPrime(i)) sum += i;
  }
  
  return sum;
};

console.log(sumOfPrimes(10));
