var isPerfect = function(number) {
  var sumOfFactors = 0;

  for(index = 1; index <= number; index++) {
    if(number % index == 0) {
      sumOfFactors += index;
    }
  }

  return sumOfFactors 
    == number * 2;
}; 

for(i = 1; i <= 10; i++) {
  console.log('is ' + i + ' perfect?: ' + isPerfect(i));
}
