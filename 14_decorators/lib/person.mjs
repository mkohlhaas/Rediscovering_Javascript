"use strict";

var _dec, _class;

import { ToString } from './decorators.mjs';
let Person = (_dec = ToString({
  exclude: ['age']
}), _dec(_class = class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

}) || _class);
export { Person as default };