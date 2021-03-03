'use strict';

Set.prototype.combine = function(otherSet) {
  const copyOfSet = new Set(this);
  
  for(const element of otherSet) {
    copyOfSet.add(element);
  }
  
  return copyOfSet;
};

const names1 = new Set(['Tom', 'Sara', 'Brad', 'Kim']);
const names2 = new Set(['Mike', 'Kate']);

const combinedNames = names1.combine(names2);

console.log(names1.size);
console.log(names2.size);
console.log(combinedNames.size);
console.log(combinedNames);
