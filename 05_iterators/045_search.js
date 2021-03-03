'use strict';
class SuperHero {
  constructor(name, realName) {
    this.name = name;
    this.realName = realName;
  }
                               
  toString() { return this.name; }
  
  [Symbol.search](value) {  
    console.info('this: ' + this + ', value: ' + value);
    return value.search(this.realName);
  }
}

const superHeroes = [
  new SuperHero('Superman', 'Clark Kent'),
  new SuperHero('Batman', 'Bruce Wayne'),
  new SuperHero('Ironman', 'Tony Stark'),
  new SuperHero('Spiderman', 'Peter Parker')
];

const names = 'Peter Parker, Clark Kent, Bruce Wayne';
for(const superHero of superHeroes) {
  // console.log(superHero);
  console.log(`Result of search: ${names.search(superHero)}`);
}
