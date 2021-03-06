'use strict';

const sortByTitle = function(books) {
  const byTitle = function(book1, book2) {
    return book1.title.localeCompare(book2.title);
  };
    
  return books.slice().sort(byTitle);
};

const books = [
  { title: 'Who Moved My Cheese' },
  { title: 'Great Expectations' },
  { title: 'The Power of Positive Thinking' }
];
                                              
console.log(sortByTitle(books));
