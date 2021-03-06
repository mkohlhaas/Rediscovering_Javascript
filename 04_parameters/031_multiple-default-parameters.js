'use strict';

const fetchData = function(
  id, 
  location = { host: 'localhost', port: 443 }, 
  uri = 'employees') {
    
  console.log('Fetch data from https://' + 
    location.host + ':' + location.port + '/' + uri);
};

fetchData(1, { host: 'agiledeveloper', port: 404 }, 'books');
fetchData(1, { host: 'agiledeveloper', port: 404 });
fetchData(2);

fetchData(3, undefined, 'books');
