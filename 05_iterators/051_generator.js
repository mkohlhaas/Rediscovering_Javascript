'use strict';
class CardDeck {
  constructor() {
    this.suitShapes = ['Clubs', 'Diamonds', 'Hearts', 'Spaces'];
  }

  *suits() {
    for(const color of this.suitShapes) {
      yield color;
    }
  }

  *pips() {
    yield 'Ace';
    yield 'King';
    yield 'Queen';
    yield 'Jack';
    
    for(let i = 10; i > 1; i--) {
      yield i.toString();
    }
  }

  *suitsAndPips() {
    yield* this.suits();
    yield* this.pips();
  }
}

const deck = new CardDeck();

for(const suit of deck.suits()) {
  console.log(suit);
}

for(const pip of deck.pips()) {
  process.stdout.write(pip + ', ');
}
console.log();

for(const value of deck.suitsAndPips()) {
  process.stdout.write(value + ' ');
}
console.log();
