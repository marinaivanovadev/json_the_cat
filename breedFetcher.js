const request = require('request'); // request library
// access to command line for Node.js

const breedName = process.argv[2]; // the third element


// request to check loads is fine

request(`https://api.thecatapi.com/v1/breeds/search?q=Chartreux`, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(`Request loaded`);

    //console.log(typeof body); // check the type of body - string
    const data = JSON.parse(body);// convert from string to object
    console.log(data[0].description); // object from site, access to object in the array
    //console.log(typeof data); // confirm that it is object
    

  } else {
    console.log("Error to load", error);
  }
});

