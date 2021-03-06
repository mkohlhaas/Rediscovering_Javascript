'use strict';

const hours = 14;
const event = 'meeting';

console.log(`The ${event} will happen ${hours < 12 ? 'in the morning' : 
  `later in the day, in the ${hours < 20 ? 'evening' : 'night'}`}.`);
