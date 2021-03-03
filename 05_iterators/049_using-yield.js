'use strict';
class CardDeck {
  constructor() {
    this.suitShapes = ['Clubs', 'Diamonds', 'Hearts', 'Spaces'];
  }
  
  *[Symbol.iterator]() {
    for(const shape of this.suitShapes) {
      yield shape;
    }
  }
}

const deck = new CardDeck();

for(const suit of deck) {
  console.log(suit);
}
