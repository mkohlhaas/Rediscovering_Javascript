'use strict';

const canVote = function(age) {
  if(age === 18) {
    return 'yay, start voting';
  }

  if(age > 17) {
    return "please vote";
  }

  return "no, can't vote";
};

console.log(canVote(12));      //no, can't vote
console.log(canVote("12"));    //no, can't vote
console.log(canVote(17));      //no, can't vote
console.log(canVote('@18'));   //no, can't vote
console.log(canVote(18));      //yay, start voting
console.log(canVote(28));      //please vote
