'use strict';

const createClass = function(...fields) {
  // Class name is optional for class expressions.
  return class {
    constructor(...values) {
      fields.forEach((field, index) => this[field] = values[index]);
    }
  };
};

// Once we obtain a reference to classes created using class expressions, we can
// use them like classes defined using the class statement.
const Book = createClass('title', 'subtitle', 'pages');
const Actor = createClass('firstName', 'lastName', 'yearStarted');

const fisher = new Actor('Carrie', 'Fisher', 1969);
// Since our class was not given a name during creation, the output shows the
// instance like it’s a JavaScript object—there’s no class name prefix in the
// output.
console.log(fisher);
