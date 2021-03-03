'use strict';

const stripMargin = function(texts, ...expressions) {             
  const exceptLast = expressions.map(function(expression, index) {
    return `${texts[index]}${expression.toString().toUpperCase()}`;
  }).join('');
  
  const result = `${exceptLast}${texts[texts.length - 1]}`;
  
  return result.replace(/[\n][\t\s]+(\w)/g, ' $1').trim();
};

const name = 'Jane';

const processed = stripMargin` This is for
  ${name} and it needs to be
	delivered by December 24th.`;

  
console.log(processed);
//This is for JANE and it needs to be delivered by December 24th.
