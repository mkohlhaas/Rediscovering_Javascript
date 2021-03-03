'use strict';

const names = new Set(['Jack', 'Jill', 'Jake', 'Jack', 'Sara']);
  
console.log(names.size);

names.add('Mike');

names.add('Kate')
  .add('Kara');

console.log(names.has('Brad'));                                         

console.log(names.entries());
console.log(names.keys());
console.log(names.values());

for(const name of names) {
  console.log(name);
}

names.forEach(name => console.log(name));

[...names].filter(name => name.startsWith('J'))
  .map(name => name.toUpperCase())
  .forEach(name => console.log(name));

const another = new Set();
console.log(
  another.add('a')
    .add(1));
