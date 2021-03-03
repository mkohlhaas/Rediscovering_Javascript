'use strict';

const alwaysTrue = () => true;

const madFunction = () => { throw new Error('fail'); };

console.log(alwaysTrue());
              
try {
  madFunction();  
} catch(ex) {
  console.log(ex.message);
}
