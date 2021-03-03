'use strict';

const proxy = new Proxy(Map.prototype, {
  get: function(target, propertyName, receiver) {
    return receiver.get(propertyName);
  }
});

Reflect.setPrototypeOf(Map.prototype, proxy);

const langsAndAuthors = new Map([
  ['JavaScript', 'Eich'], ['Java', 'Gosling']]);

console.log(langsAndAuthors.get('JavaScript'));
console.log(langsAndAuthors.JavaScript);
         
const capitals = new Map([
  ['USA', 'Washington. D.C.'],
  ['UK', 'London'],
  ['Trinidad & Tobago', 'Port of Spain']]);
  
console.log(capitals.UK);
console.log(capitals['Trinidad & Tobago']);
