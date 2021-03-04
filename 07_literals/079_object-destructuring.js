'use strict';

const weight = 'WeightKG';

const sam = {
  name: 'Sam',
  age: 2,
  height: 110,
  address: { street: '404 Missing St.'},
  shipping: { street: '500 NoName St.'},
  [weight]: 15,
  [Symbol.for('favoriteColor')]: 'Orange',
};

{
  const firstName = sam.name;
  const theAge = sam.age;
  console.log(`${firstName} ${theAge}`);
}

{
  const { name: firstName, age: theAge } = sam;
  console.log(`${firstName} ${theAge}`);
}

{
  const { name: firstName, age: theAge } = { name: 'Sam', age: 2, height: 110 };
  console.log(`${firstName} ${theAge}`);
}

{
  const { name, age: theAge } = sam;
  console.log(`${name} ${theAge}`);
}

{
  const { name, age } = sam;
  console.log(`${name} ${age}`);
}

{
  const { [weight]: wt, [Symbol.for('favoriteColor')]: favColor } = sam;
  console.log(`${wt} ${favColor}`);
}

{
  const { lat, lon, favorite = true} = {lat: 84.45, lon: -114.12};
  console.log(`${lat} ${lon} ${favorite}`);
}

{
  const { lat, lon, favorite: liked = false} = {lat: 84.45, lon: -114.12};
  console.log(`${lat} ${lon} ${liked}`);
}

{
  const printInfo = function(person) {
    console.log(`${person.name} is ${person.age} years old`);
  };                                                        

  printInfo(sam);
}

{
  const printInfo = function({name: theName, age: theAge}) {
    console.log(`${theName} is ${theAge} years old`);
  };                                                        
  
  printInfo(sam);
}

{
  const printInfo = function({name, age}) {
    console.log(`${name} is ${age} years old`);
  };                                                        
  
  printInfo(sam);
}

{
  // const { name, address: { street } } = sam;
  const { address: { street } } = sam;
  
  console.log(street);
  
  try {
    console.log(address);
  } catch(ex) {
    console.log(ex.message);
  }
}

{
  // const { name, address: { street }, shipping: { street: shipStreet } } = sam;
  const { address: { street }, shipping: { street: shipStreet } } = sam;
  
  console.log(`${street}\n${shipStreet}`);
}

{
  let theName = '--';
  // Note: braces need parens
  ({ name: theName } = sam);

  console.log(theName);
}
