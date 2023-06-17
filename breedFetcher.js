const request = require('request');

request("https://api.thecatapi.com/v1/breeds/search?q=sib", (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(`Request loaded`);
    console.log(typeof body);
  } else {
    console.log("Error to load", error);
  }
});

