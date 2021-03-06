'use strict';

const fs = require('fs-extra');
const request = require('request-promise');

const countPrimes = function(number) {
  if(isNaN(number)) {
    return Promise.reject(`'${number}' is not a number`);
  }
  
  return request(`http://localhost:8084?number=${number}`)
    .then(count => `Number of primes from 1 to ${number} is ${count}`);
};

const createTimeout = function(timeInMillis) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => reject(`timeout ${timeInMillis} MS`), timeInMillis);
  });
};

const logAndTerminate = function(err) {
  console.log(err);
  process.exit(1);
};                  

const readFileContents = function(pathToFile) {
  return fs.readFile(pathToFile)
    .then(content => content.toString())
    .then(content =>content.split('\n'));
}

const countPrimesForEachLine = async function(pathToFile) {
  try {
    const lines = await readFileContents(pathToFile);
    
    const counts = await Promise.race(
      [Promise.all(lines.map(countPrimes)), createTimeout(1000)]);
    
    console.log(counts);    
  } catch(err) {
    logAndTerminate(err);
  }
};

countPrimesForEachLine('numbers.txt');
