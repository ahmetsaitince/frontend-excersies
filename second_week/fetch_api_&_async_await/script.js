fetch('./movies.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

// Fetching from an API

fetch('https://www.google.com/recaptcha/api2/')
  .then((response) => response.json())
  .then((data) => console.log(data));
