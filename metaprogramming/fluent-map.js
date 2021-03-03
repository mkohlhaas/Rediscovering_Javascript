'use strict';

const langsAndAuthors = new Map([
  ['JavaScript', 'Eich'], ['Java', 'Gosling']]);

const accessLangsMap = function(map) {
  console.log(`Number of languages: ${map.size}`);
  console.log(`Author of JavaScript: ${map.get('JavaScript')}`);
  console.log(`Asking fluently: ${map.JavaScript}`);
};

accessLangsMap(langsAndAuthors);

const handler = {
  get: function(target, propertyName, receiver) {
    if(Reflect.has(target, propertyName)) {
      const property = Reflect.get(target, propertyName);

      if(property instanceof Function) { //existing method, bind and return
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
