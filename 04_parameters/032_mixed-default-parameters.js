'use strict';

const badFetchData = function(
  location = { host: 'localhost', port: 443 }, 
  id, 
  uri = 'employees') {
    
  console.log('Fetch data from https://' + 
    location.host + ':' + location.port + '/' + uri);
};  

badFetchData(undefined, 4, 'magazines');
