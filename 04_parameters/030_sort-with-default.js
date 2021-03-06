'use strict';

const sortByTitle = function(books, ascending = true) {
  const multiplier = ascending ? 1 : -1;
    
  const byTitle = function(book1, book2) {
    return book1.title.localeCompare(book2.title) * multiplier;
  };
    
  return books.slice().sort(byTitle);
};

const books = [
  { title: 'Who Moved My Cheese' },
  { title: 'Great Expectations' },
  { title: 'The Power of Positive Thinking' }
];
                                              
console.log(sortByTitle(books));
console.log(sortByTitle(books, false));
