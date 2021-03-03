const numbers = [1, 2, 3];

console.log("The Symbol properties in arrays are:");

console.log(
  Object.getOwnPropertySymbols(Object.getPrototypeOf(numbers)));
