'use strict';

class Names {
  constructor(...names) {
    this.names = names;
  }

  filter1(selector) {
    return new Names(...this.names.filter(selector));
  }

  filter2(selector) {
    const constructor = Reflect.getPrototypeOf(this).constructor;
    
    return new constructor(...this.names.filter(selector));
  }

  filter3(selector) {
    const constructor = 
      // asking for a static property - kindHint - on the context object’s
      // class:
      Reflect.getPrototypeOf(this).constructor.kindHint ||
        Reflect.getPrototypeOf(this).constructor;
    
    return new constructor(...this.names.filter(selector));
  }
}


class SpecializedNames extends Names {
  
  // Uncomment this method to see the difference:
  static get kindHint() {
    return Names;  // a class is actually a constructor in JavaScript
    // kindHint can return any constructor:
    // return SpecializedNames;
  }
}

const specializedNames = new SpecializedNames('Java', 'C#', 'JavaScript');

console.log(specializedNames.filter1(name => name.startsWith('Java')));
console.log(specializedNames.filter2(name => name.startsWith('Java')));
console.log(specializedNames.filter3(name => name.startsWith('Java')));
