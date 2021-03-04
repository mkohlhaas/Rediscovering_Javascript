'use strict';

// Create a map from a list of lists of key-value entries.
// The initial data for the map may be any iterable with a pair of keys and values.
// Keys and values may be any primitive or object.
const scores = 
  new Map([['Sara', 12], ['Bob', 11], ['Jill', 15], ['Bruce', 14]]);

scores.set('Jake', 14);

console.log(scores);
console.log('----------------------------------------');
console.log(scores.size);

console.log('----------------------------------------');
for(const [name, score] of scores.entries()) {
  console.log(`${name} : ${score}`);
}

console.log('----------------------------------------');
// The first argument is the key:
scores.forEach((score, name) => console.log(`${name} : ${score}`));

console.log('----------------------------------------');
// The first argument is the key because we can leave it out:
scores.forEach(score => console.log(score));

console.log('----------------------------------------');
console.log(scores.keys());
console.log(scores.values());

console.log('----------------------------------------');
console.log(scores.has('Jane'));
console.log(scores.has('Jill'));
     
console.log('----------------------------------------');
const another = new Map();
another.set(1, 2);
console.log(another);
