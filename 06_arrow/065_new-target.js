'use strict';
const f1 = function() {
  if(new.target) {
    console.log('called as a constructor');    
    console.log(new.target);
  }
  else {
    console.log('called as a function');    
  }
};                  
      
new f1();
f1();
