'use strict';

const addAge = function(person, theAge) {
  return {first: person.first, last: person.last, age: theAge };
};

const parker = { first: 'Peter', last: 'Parker', 
  email: 'spiderman@superheroes.example.com' };

console.log(addAge(parker, 15));
