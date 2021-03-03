'use strict';

const sam = {
  name: 'Sam',
  age: 2,
  play: function(toy) { 
    return 'I am ' + this.name + ', age ' + this.age + ' with ' + toy;
  }
};

console.log(sam.play('ball'));
