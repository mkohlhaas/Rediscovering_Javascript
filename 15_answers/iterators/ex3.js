class Message {
  constructor(text) { this.text = text; }
  
  [Symbol.replace](word, substitute) {
    return this.text.replace(word, substitute);
  }
}

const message = new Message('There are no stupid questions.');

console.log('stupid'.replace(message, 's*****'));
//There are no s***** questions.

console.log(''.replace(message, 'Yes, '));
//Yes, There are no stupid questions.
