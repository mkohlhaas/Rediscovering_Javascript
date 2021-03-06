'use strict';

const masterWizard = Symbol.for('Dumbledore');
const topWizard = Symbol.for('Dumbledore');

console.log(typeof(masterWizard));
console.log(masterWizard);
console.log(masterWizard === topWizard);

console.log('Dumbledore' === Symbol.keyFor(topWizard));
