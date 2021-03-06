'use strict';

const sam = { name: 'Sam', age: 2 };
  
console.log(sam);
console.log({...sam, age: 3});
console.log({...sam, age: 4, height: 100 });
console.log(sam);
