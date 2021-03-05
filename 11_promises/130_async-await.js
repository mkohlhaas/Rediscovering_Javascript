'use strict';

const computeSync = function(number) {
  if(number < 0) {
    throw new Error('no negative, please');
  }
  return number * 2;
};

const computeAsync = function(number) {
  if(number < 0) {
    return Promise.reject('no negative, please');
  }
  return Promise.resolve(number * 2);
};

const callComputeSync = function(number) {
  try {
    const result = computeSync(number);
    console.log(`Result is ${result}`);
  } catch(ex) {
    console.log(ex.message);
  }
} 

const callComputeAsync = function(number) {
  computeAsync(number)
    .then(result => console.log(`Result is ${result}`))
    .catch(err => console.log(err));
} 

callComputeSync(2);
callComputeSync(-1);

callComputeAsync(2);
callComputeAsync(-1);

const callCompute = async function(number) {
  try {
    const result = await computeAsync(number);
    console.log(`Result is ${result}`);
  } catch(ex) {
    console.log(ex);
  }
}

callCompute(2);
callCompute(-1);
