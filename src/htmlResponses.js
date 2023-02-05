const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const client2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const client3 = fs.readFileSync(`${__dirname}/../client/client3.html`);

const getPage = (request, response, page) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(page);
  response.end();
};

const getIndex = (request, response) => {
  getPage(request, response, index);
};
const getClient2 = (request, response) => {
  getPage(request, response, client2);
};
const getClient3 = (request, response) => {
  getPage(request, response, client3);
};

module.exports.getIndex = getIndex;
module.exports.getClient2 = getClient2;
module.exports.getClient3 = getClient3;
