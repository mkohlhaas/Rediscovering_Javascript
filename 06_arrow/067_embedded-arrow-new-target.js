'use strict';

const outer = function() {
  return () => console.log(new.target);
};

const arrow1 = new outer();
const arrow2 = outer();

arrow1();
arrow2();
