// Update this constant with your ServiceNow credentials
const options = {
  url: 'https://dev74158.service-now.com/',
  username: 'admin',
  password: 'admin',
  serviceNowTable: 'change_request'
};


/**
 * Import the Node.js request package.
 * See https://www.npmjs.com/package/request
 */
const request = require('request');
const path = require('path');

// We'll use this regular expression to verify REST API's HTTP response status code.
const validResponseRegex = /(2\d\d)/;
const ServiceNowConnector = require(path.join(__dirname, './connector.js'));
function mainOnObject() {
  // Instantiate an object from class ServiceNowConnector.
  const connector = new ServiceNowConnector(options);
  // Test the object's get and post methods.
  // You must write the arguments for get and post.
  connector.get();
  connector.post();

}

// Call mainOnObject to run it.
mainOnObject();