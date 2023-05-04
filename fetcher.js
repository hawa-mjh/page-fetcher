//requires request and fs modules
const request = require('request');
const fs = require('fs');
// to get the command line arguments for the URL and the local file path
const url = process.argv[2];
const localPath = process.argv[3];
//Use the request module to make an HTTP request to the URL and save the response to a file using the fs module
request(url, (error, response, body) => {
  if (error) {
    console.log('Error:', error);
  } else if (response.statusCode !== 200) {
    console.log('Status:', response.statusCode);
  } else {
    fs.writeFile(localPath, body, (error) => {
      if (error) {
        console.log('Error:', error);
      } else {
        const fileSize = fs.statSync(localPath).size;
        console.log(`Downloaded and saved ${fileSize} bytes to ${localPath}`);
      }
    });
  }
});