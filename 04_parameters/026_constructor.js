'use strict';
const patternAndFlags = ['r', 'i'];  

const regExp = new RegExp(...patternAndFlags);                     
console.log('brother'.replace(regExp, ''));
