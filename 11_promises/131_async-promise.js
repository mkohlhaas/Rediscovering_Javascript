'use strict';

const compute = async function(number) {
  if(number < 0) {
    return Promise.reject('no negative, please');
  }
  return Promise.resolve(number * 2);
};

//can still use then and catch on async functions
const callCompute = function(number) {
  compute(number)
    .then(result => console.log(`Result is ${result}`))
    .catch(error => console.log(error));
}

callCompute(2);
callCompute(-1);
