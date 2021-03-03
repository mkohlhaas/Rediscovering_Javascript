'use strict';

const sam = {
  name: 'Sam',
  age: 2,
  play: (toy) => 'I am ' + this.name + ', age ' + this.age + ' with ' + toy
};

console.log(sam.play('ball'));
