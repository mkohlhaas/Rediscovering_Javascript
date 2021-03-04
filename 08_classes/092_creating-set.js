'use strict';

// Create set from an array.
const names = new Set(['Jack', 'Jill', 'Jake', 'Jack', 'Sara']);
  
console.log(names.size);

names.add('Mike');

// We can chain set methods as they return a new set:
names.add('Kate').add('Kara');
console.log(names);
console.log(names.has('Brad'));                                         

console.log(names.entries());
console.log(names.keys());
console.log(names.values());

console.log('--------- All entries ------------------');
for(const name of names) {
  console.log(name);
}

console.log('--------- Filter & Upper-case ----------');
// Sets doesn't provide filter, map, etc.
// Instead create array from set with spread operator:
[...names].filter(name => name.startsWith('J'))
  .map(name => name.toUpperCase())
  .forEach(name => console.log(name));

console.log('--------- All entries ------------------');
names.forEach(name => console.log(name));

names.delete('Sara');
console.log('----------- No Sara --------------------');
names.forEach(name => console.log(name));

names.clear();
console.log('----------- Empty set ------------------');
names.forEach(name => console.log(name));

console.log('----------------------------------------');
const another = new Set();
console.log(another.add('a').add(1));
