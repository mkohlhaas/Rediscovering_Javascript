'use strict';
navigator.geolocation.getCurrentPosition(
  (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    document.getElementById('location').innherHTML = 
      `${latitude}, ${longitude}`;
  },
  (error) => {
    document.getElementById('location').innherHTML = 
      `Error: ${error}`;
  });
