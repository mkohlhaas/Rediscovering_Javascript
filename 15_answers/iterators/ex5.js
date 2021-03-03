const fibonocciSeries = function*() {
  let current = 1;
  let next = 1;

  let index = 0;
    
  yield *[[index++, current], [index++, next]];
  
  while(true) {
    const temp = current;
    current = next;     
    next = next + temp;
    
    yield [index++, next];
  }
}

for(const [index, value] of fibonocciSeries()) {
  if(index > 8) break;
  process.stdout.write(value + ", ");
}
