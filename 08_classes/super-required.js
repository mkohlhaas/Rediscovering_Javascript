'use strict';

class Base {}

class Derived1 extends Base {
  constructor() {
    console.log('Derived1');
    super();
    this.something = 4;
  }
}

class Derived2 extends Base {
  constructor() {
    console.log('Derived2');
    this.something = 4;
  }
}

class Derived3 extends Base {
  constructor() {
    console.log('Derived3');
    this.something = 4; 
    super();
  }
}

class Derived4 extends Base {
}

new Derived1();

try {
  new Derived2();
}catch(ex) {
  console.log(ex.message);
}

try {
  new Derived3();
}catch(ex) {
  console.log(ex.message);
}

new Derived4();
console.log('done');
