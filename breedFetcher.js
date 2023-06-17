const request = require('request'); // request library
// access to command line for Node.js

const fetchBreedDescription = function(breedName, callback) {
  if (!breedName) {
    callback("Please include the search breed name", null);
  } else {
    const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
    // request to check loads is fine

    request(url, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        //console.log(`Request loaded`);

        //console.log(typeof body); // check the type of body - string
        const data = JSON.parse(body);// convert from string to object
        //console.log(typeof data); // confirm that it is object
        if (Array.isArray(data) && data.length > 0) {
          callback(null, data[0].description); // object from site, access to object in the array
        } else {
          callback("No breed found", null); // Edge Case: Breed Not Found
        }
      } else {
        callback("Error to load", null); // Edge Case: Request Failed
      }
    });
  }
};

module.exports = {
  fetchBreedDescription
};