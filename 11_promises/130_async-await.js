'use strict';

console.log('----------- Sync Calls --------------------');

const computeSync = function(number) {
  if(number < 0) {
    throw new Error('no negative, please');
  }
  return number * 2;
};

const callComputeSync = function(number) {
  try {
    const result = computeSync(number);
    console.log(`Result is ${result}`);
  } catch(ex) {
    console.log(ex.message);
  }
}; 

callComputeSync(2);
callComputeSync(-1);

console.log('----------- Async Calls -------------------');

const computeAsync = function(number) {
  if(number < 0) {
    return Promise.reject('no negative, please');
  }
  return Promise.resolve(number * 2);
};

const callComputeAsync = function(number) {
  computeAsync(number)
    .then(result => console.log(`Result is ${result}`))
    .catch(err => console.log(err));
}; 

callComputeAsync(2);
callComputeAsync(-1);

console.log('----------- Async & Await -----------------');

// This is exactly like callComputeSync with async & await interspersed.
// It is often easier to prototype a synchronous version of a function and
// then convert it to the asynchronous version when needed.
const callComputeAwait = async function(number) {
  try {
    // 'computeAsync' is a function returning a promise.
    const result = await computeAsync(number);
    console.log(`Result is ${result}`);
  } catch(ex) {
    console.log(ex);
  }
};

callComputeAwait(2);
console.log('Just chucking along ...');
callComputeAwait(-1);

// Use promises to create asynchronous functions and then pick between
// then-catch and async-await for calling asynchronous functions.
