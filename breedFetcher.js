const request = require('request'); // request library
// access to command line for Node.js

const breedName = process.argv[2]; // the third element
// console.log(breedName);

if (!breedName) {
  console.log("Please include the search breed name");
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
        console.log(data[0].description); // object from site, access to object in the array
      } else {
        console.log("No breed found"); // Edge Case: Breed Not Found
      }
    } else {
      console.log("Error to load", error); // Edge Case: Request Failed
    }
  });
}