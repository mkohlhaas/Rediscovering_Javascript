'use strict';
  
const fs = require('fs');

const displayFileContent = function(pathToFile) {
  const handleFile = function(err, contents) {
    if(err) {
      console.log(err.message);
    } else {
      console.log(contents.toString());
    }
  };

  try {
    fs.readFile(pathToFile, handleFile);    
  } catch(ex) {
    console.log(ex.message);
  }
};

displayFileContent('124_readfile.js');
displayFileContent('does-not-exits');
displayFileContent();
