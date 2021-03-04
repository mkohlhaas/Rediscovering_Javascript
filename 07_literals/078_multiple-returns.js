'use strict';

const getPresidentName = function(number) {
  //implemented only for number 6
  return ['John', 'Quincy', 'Adams'];
};

{
  console.log(getPresidentName(6));
}

{
  const president6 = getPresidentName(6);
  const firstName = president6[0];
  const middleName = president6[1];
  const lastName = president6[2];
  console.log(`First name: ${firstName} Middle Name: ${middleName} Last name: ${lastName}`);
}

{
  const [firstName, middleName, lastName] = getPresidentName(6);
  console.log(`First name: ${firstName} Middle Name: ${middleName} Last name: ${lastName}`);
}

{
  const [firstName,, lastName] = getPresidentName(6);
  console.log(`First name: ${firstName} Last name: ${lastName}`);
}

{
  const [firstName] = getPresidentName(6);
  console.log(`First name: ${firstName}`);
}

{
  const [firstName,, lastName, nickName] = getPresidentName(6);
  console.log(nickName);
}

{
  const [firstName,, lastName, nickName='Old Man Eloquent'] = getPresidentName(6);
  console.log(nickName);
}

{
  const [firstName, ...otherParts] = getPresidentName(6);
  console.log(firstName);
  console.log(otherParts);
}

{
  let [a, b] = [1, 2];
  console.log(`a=${a} b=${b}`);
  [a, b] = [b, a];
  console.log(`a=${a} b=${b}`);
}

{
  const printFirstAndLastOnly = function([first,, last]) {
    console.log(`first ${first} last ${last}`);
  };

  printFirstAndLastOnly(['John', 'Q', 'Adams']);
}
