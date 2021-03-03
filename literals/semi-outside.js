'use strict';
const sam = {
  name: 'Sam',
};

let theName = '--';
({ name: theName } = sam;);
