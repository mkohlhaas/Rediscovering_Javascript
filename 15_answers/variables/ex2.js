'use strict';

function first() {
  for(let i = 0; i < 5; i++) {
    second();
  }
}

function second() {
  for(let i = 0; i < 3; i++) {
    console.log(i);
  }
}

first();
