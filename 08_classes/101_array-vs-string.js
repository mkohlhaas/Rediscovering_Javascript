'use strict';

class MyString extends String {}
class MyArray extends Array {}

const concString = new MyString().concat(new MyString());
const concArray = new MyArray().concat(new MyArray());

console.log(MyString);
console.log(`instanceof MyString?: ${concString instanceof MyString}`);
console.log(MyArray);
console.log(`instanceof MyArray?: ${concArray instanceof MyArray}`);
