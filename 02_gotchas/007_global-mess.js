//BROKEN CODE
const outer = function() {
  for(i = 1; i <= 3; i++) {
  // for(let i = 1; i <= 3; i++) {
    inner();
  }
};

const inner = function() {
  for(i = 1; i <= 5; i++) {
  // for(let i = 1; i <= 5; i++) {
    console.log(i);
  }
};

outer();
