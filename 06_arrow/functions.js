'use strict';

{
  function sqr(n) { return n * n; }
  console.log(sqr(5));
}

{
  const sqr = function(n) { return n * n; };
  console.log(sqr(5));
}

{
  const sqr = (n) => n * n;
  console.log(sqr(5));
}
