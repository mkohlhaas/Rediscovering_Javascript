//BROKEN CODE
'use strict';

var result = 0;

for(var i = 0; i < 5; i++) {
  var sqrt = Math.sqrt(i);
  result += sqrt;
}

console.log(result);

console.log(sqrt); //sqrt is visible here, though not intended
