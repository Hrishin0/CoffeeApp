const client = require('alexflipnote.js');
const alexClient = new client();
const fs = require('fs');
const https = require('https');

(async () => {
  const link = await alexClient.coffee();
  const file = fs.createWriteStream("image.png");
  https.get(link.file, function(response) {
     response.pipe(file);
     file.on("finish", () => {
         file.close();
     });
  });
})();