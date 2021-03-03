'use strict';

const hours = 14;
const event = 'meeting';
                                                               
const when = (hrs) => 
  hrs < 12 ? 'in the morning' : 
    `later in the day, in the ${hrs < 20 ? 'evening' : 'night'}`;

console.log(`The ${event} will happen ${when(hours)}.`);
