'use strict';

const addAge = function(person, theAge) {
  return {first: person.first, last: person.last, age: theAge };
};
           
const parker = { first: 'Peter', last: 'Parker' };

console.log(addAge(parker, 15));
