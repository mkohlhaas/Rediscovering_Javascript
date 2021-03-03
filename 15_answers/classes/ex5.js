'use strict';

const create = function(sports) {
  return new Set(sports.map(sport => sport.toUpperCase()));
};

const toLowerCase = function(sports) {
  return new Set([...sports].map(sport => sport.toLowerCase()));
};

const sports = create(['Soccer', 'Football', 'Cricket', 'Tennis', 'soccer']);

console.log(sports.has('FOOTBALL')); //true
console.log(sports.has('Football')); //false
console.log(sports.size); //4

const inLowerCase = toLowerCase(sports);
console.log(inLowerCase.has('football'));
console.log(inLowerCase.size); //4
