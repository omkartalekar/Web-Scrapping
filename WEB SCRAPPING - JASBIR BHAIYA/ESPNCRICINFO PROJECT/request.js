const request = require("request");
request("http://www.worldometers.info/coronavirus/",cb);

function cb(error, response,html) {

  console.error('error:', error); 
  console.log('statusCode:', response && response.statusCode);
  console.log('html:', html); 
};