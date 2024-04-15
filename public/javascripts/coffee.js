const client = require('alexflipnote.js');
const alexClient = new client();
const fs = require('fs');
const https = require('https');
 
let image

(async () => {
  image = await alexClient.coffee();
  console.log(image);
})();

module.exports = image;