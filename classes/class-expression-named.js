'use strict';

const Movie = class Show {
  constructor() {
    console.log('creating instance...');
    console.log(Show);
  }
};

console.log('Movie is the class name');
console.log(Movie);
const classic = new Movie('Gone with the Wind');

try {             
  console.log('however...');      
  console.log(Show);
} catch(ex) {
  console.log(ex.message);
}
