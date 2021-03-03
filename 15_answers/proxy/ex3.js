'use strict';

const createRevocableProxy = function(instance) {
  const handler = {
    get: function(target, propertyName /*, unusedReceiver */) {
      return Reflect.get(target, propertyName).bind(target);
    }
  };

  const { proxy, revoke } = Proxy.revocable(instance, handler);

  setTimeout(revoke, 3000);
                                                          
  return proxy;
};

const proxy = createRevocableProxy(new Date());

const callGetYear = function() {
  try {
    console.log(1900 + proxy.getYear());
  } catch(ex) {
    console.log(ex.message);
  }
};

callGetYear(); //current year like 2018

setTimeout(callGetYear, 1000); //current year like 2018

setTimeout(callGetYear, 5000);
//Cannot perform 'get' on a proxy that has been revoked
