'use strict';

const createPerson = function(name, age, sport, sportFn) {
  return {
    name,
    age,
    toString() {
      return `${this.name} ${this.age}`;
    },
    [`play${sport}`] : sportFn
  };
};

const sam = 
  createPerson('Sam', 21, 'Soccer', 
    function() { console.log(`${this.name}, kick, don't touch`); });
    
console.log(sam.name);
console.log(sam.toString());
sam.playSoccer();
