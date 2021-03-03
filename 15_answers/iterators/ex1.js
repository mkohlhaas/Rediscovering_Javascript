const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

for(const [i, letter] of letters.entries()) {
  if(i % 3 === 0)
    console.log(letter);
}
