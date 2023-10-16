const { Given, When, Then } = require('cucumber');
const axios = require('axios');
const assert = require('assert');

let apiKey;
let response;

Given('I have a valid b token', function () {
  apiKey = '5cb22dce7db4a635c33734ec16f62c5ca49d2a52c3dece07598fad1c8a97ce3d';
});

When('I send a GET request to {string}', async function (url) {
  try {
    response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    return response;
  } catch (error) {
    this.error = error.response ? error.response.data : error.message;
  }
});

Then('the response status code {int}', function (statusCode) {
  assert.strictEqual(response.status, statusCode);
});

Then('the response should contain user details', function () {
  assert.ok(response.data.data.length > 0, 'Response should contain user details');
});
