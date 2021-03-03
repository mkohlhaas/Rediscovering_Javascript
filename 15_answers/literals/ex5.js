'use strict';

const getDetails = function(
  {name, born: { year: birthYear }, graduated: {year}}) {
  return `${name} born in the year ${birthYear}, graduated in ${year}.`;
};

const details =
  getDetails({name: 'Sara',
    born: { month: 1, day: 1, year: 2000 },
    graduated: { month: 5, day: 31, year: 2018 }});

console.log(details);
//Sara born in the year 2000, graduated in 2018.
