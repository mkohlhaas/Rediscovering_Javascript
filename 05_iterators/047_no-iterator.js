'use strict';
class CardDeck {
  constructor() {
    this.suitShapes = ['Clubs', 'Diamonds', 'Hearts', 'Spaces'];
  }
}

const deck = new CardDeck();

for(const suit of deck) {
  console.log(suit);
}
