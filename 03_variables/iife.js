//BROKEN CODE
'use strict';

var result = (function() {
  var result = 0;

  for(var i = 0; i < 5; i++) {
    var sqrt = Math.sqrt(i);
    result += sqrt;
  }
  
  return result;
})();

console.log(result);

console.log(sqrt); //ERROR because sqrt is not visible here,
//that's the desired behavior
