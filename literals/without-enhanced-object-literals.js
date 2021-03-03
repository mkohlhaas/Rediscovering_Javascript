'use strict';
const createPerson = function(name, age, sport, sportFn) {
  const person = {
    name: name,
    age: age,
    toString: function() {
      return this.name + ' '  + this.age;
    }
  };

  person['play' + sport] = sportFn;

  return person;
};

const sam =
  createPerson('Sam', 21, 'Soccer',
    function() { console.log(`${this.name}, kick, don't touch`); });

console.log(sam.name);
console.log(sam.toString());
sam.playSoccer();
