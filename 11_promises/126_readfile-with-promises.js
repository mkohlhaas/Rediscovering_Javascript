'use strict';
  
const fs = require('fs-extra');

const countLinesWithText = function(pathToFile) {
  // Both then() and catch() return a promise, calls to these functions may
  // be chained to apply a series of filtering and transformations
  fs.readFile(pathToFile)
    .then(content => content.toString())
    .then(content => content.split('\n'))
    .then(lines => lines.filter(line => line.includes('THIS LINE')))
    .then(lines => lines.length)
    .then(count => checkLineExists(count))
    .then(count => console.log(`Number of lines with THIS LINE is ${count}`))
    .catch(error => console.log(`ERROR: ${pathToFile}, ${error.message}`));
};

const checkLineExists = function(count) {
  if(count === 0) {
    throw new Error('text does not exist in file');
  }
  
  return count;
};

countLinesWithText('126_readfile-with-promises.js');
countLinesWithText('124_readfile.js');
countLinesWithText('invalid');
countLinesWithText();
