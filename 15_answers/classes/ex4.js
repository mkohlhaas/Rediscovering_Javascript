'use strict';

const createTodo = function() {
  const todo = new Map();
  todo.set('learn JavaScript', 'done');
  todo.set('write elegant code', 'work-in-progress');
  todo.set('automate tests', 'work-in-progress');
  
  return todo;
}; 

const completedCount = function(map) {
  return [...map.values()]
    .filter(value => value === 'done')
    .length;
};

const todo = createTodo(); //Returns a Map
console.log(todo.get('learn JavaScript')); //'done'
console.log(todo.get('write elegant code'));//'work-in-progress'
console.log(todo.get('automate tests'));//'work-in-progress'
console.log(completedCount(todo)); //1
