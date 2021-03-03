'use strict';
const regex = /cool/;
            
process.stdout.write('regex is of type RegExp: ');
console.log(regex instanceof RegExp);
        
process.stdout.write('Properties of regex: ');
console.log(Object.getOwnPropertyNames(regex));
                                                           
process.stdout.write('Symbol properties of regex: ');                                                           
console.log(Object.getOwnPropertySymbols(regex));          

console.log("Symbol properties of regex's prototype: ");                                                           
console.log(Object.getOwnPropertySymbols(Object.getPrototypeOf(regex)));
