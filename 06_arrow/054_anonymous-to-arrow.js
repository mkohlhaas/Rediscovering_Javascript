'use strict';

setTimeout(function() { console.log('greetings'); }, 700);
setTimeout(() => console.log('greetings'), 1000);
const greet = () => console.log('greetings');
setTimeout(greet, 1500);
