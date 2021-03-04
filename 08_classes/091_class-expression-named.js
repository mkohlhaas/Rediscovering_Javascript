'use strict';

// Remove Show's and see what changes in the output!
const Movie = class Show {
  // The internal name would be useful to call a static method of the class that is
  // defined using class expression from within an instance method or another
  // static method of the class!
  constructor() {
    console.log('creating instance...');
    console.log(Show);
  }
};

console.log(Movie);
console.log('----------------------------------------');
const classic = new Movie('Gone with the Wind');
console.log(classic);

console.log('----------------------------------------');
try {             
  console.log('however...');      
  console.log(Show);
} catch(ex) {
  console.log(ex.message);
}
