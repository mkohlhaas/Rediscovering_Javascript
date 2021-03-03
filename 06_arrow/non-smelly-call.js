'use strict';

const onSuccess = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  document.getElementById('location').innherHTML = 
    `${latitude}, ${longitude}`;
};

const onError = (error) => {
  document.getElementById('location').innherHTML = 
    `Error: ${error}`;
};

navigator.geolocation.getCurrentPosition(onSuccess, onError);
