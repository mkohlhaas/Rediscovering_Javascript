'use strict';

const counterFactory = function() {
  class Counter {
    constructor() { this.value = 0; }
    increment() { this.value += 1; }
    
    get count() { return this.value; }
  }

  const { proxy, revoke } = Proxy.revocable(new Counter(), {});
  
  const leaseTime = 100;
  setTimeout(revoke, leaseTime);
  
  return proxy;
};

const counter = counterFactory();

const incrementAndDisplay = function() {
  try {
    counter.increment();
    console.log(counter.count);
    setTimeout(incrementAndDisplay, 20);
  } catch(ex) {
    console.log(ex.message);
  }
};

incrementAndDisplay();
