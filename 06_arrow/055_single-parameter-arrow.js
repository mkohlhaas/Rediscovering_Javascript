'use strict';

{
  const greet = (subject) => console.log('Hello ' + subject);
  setTimeout(greet.bind(null, 'Earthling'), 700);
}

{
  const greet = subject => console.log('Hello ' + subject);
  setTimeout(greet.bind(null, 'Earthling'), 1300);
}
