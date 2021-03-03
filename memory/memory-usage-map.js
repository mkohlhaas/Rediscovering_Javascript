(function() {
"use strict";

const MAX = 100000000;
const map = new Map();

for(let i = 0; i <= MAX; i++) {
  const key = {index: i};
  map.set(key, i);
}

console.log("DONE");
})();
