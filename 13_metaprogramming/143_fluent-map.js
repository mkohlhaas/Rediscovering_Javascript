'use strict';

const langsAndAuthors = new Map([
  ['JavaScript', 'Eich'], ['Java', 'Gosling']]);

const accessLangsMap = function(map) {
  console.log(`Number of languages: ${map.size}`);
  console.log(`Author of JavaScript: ${map.get('JavaScript')}`);
  console.log(`Asking fluently: ${map.JavaScript}`);
  console.log(`Asking something stupid: ${map.foo}`);
};

accessLangsMap(langsAndAuthors);

console.log('----------------------------------------');

const handler = {
  get: function(target, propertyName, receiver) {
    // console.log('--------------------');
    // console.log(target);
    // console.log(propertyName);
    // console.log(receiver);
    // console.log('--------------------');
    if(Reflect.has(target, propertyName)) {
      const property = Reflect.get(target, propertyName);
      // console.log('----------');
      // console.log(property);
      // console.log('----------');
      if(property instanceof Function) { //existing method, bind and return
        // bind the context object before making the call
        return property.bind(target);
      }                            
      //existing property, return as-is
      return property;
    }
    //synthesize property: we assume it is a key
    return target.get(propertyName);
  }
};

const proxy = new Proxy(langsAndAuthors, handler);

accessLangsMap(proxy);
