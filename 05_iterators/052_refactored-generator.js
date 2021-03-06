'use strict';

class CardDeck {
  constructor() {
    this.suitShapes = ['Clubs', 'Diamonds', 'Hearts', 'Spaces'];
  }

  *suits() {
    yield* this.suitShapes;
  }

  *pips() {
    yield* ['Ace', 'King', 'Queen', 'Jack'];
    
    yield* Array.from(new Array(9), (ignore, index) => 10 - index);

    //or using regular functions
    //yield* Array.from(
    // new Array(9), function(ignore, index) { return 10 - index; });
    
    //the above two use functional style. We may also use a more verbose
    //yield* Array.from(Array(11).keys()).reverse().splice(0, 9);
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
