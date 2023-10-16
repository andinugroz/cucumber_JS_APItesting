const { Given, When, Then } = require('cucumber');
const axios = require('axios');

// rest of your code...

const assert = require('assert');

let apiKey;
let userId;

const login = async () => {
  const userData = {
    name: 'John Doe',
    gender: 'male',
    email: 'johndoe@example.com',
    status: 'active',
  };

  try {
    const response = await axios.post('https://gorest.co.in/rest-console', userData, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    assert.strictEqual(response.status, 201);
    userId = response.data.data.id;
    return response;
  } catch (error) {
    this.error = error.response ? error.response.data : error.message;
  }
}



Given('I have a valid bearer token', function () {
  // Replace 'YOUR_API_KEY' with the actual API key
  apiKey = '5cb22dce7db4a635c33734ec16f62c5ca49d2a52c3dece07598fad1c8a97ce3d';
});
When('I send a POST request to {string} with valid user data', async function (string) {
  // Write code here that turns the phrase above into concrete actions
 login();
});

Then('the response status code should be {int}', function (int) {
  // Then('the response status code should be {float}', function (float) {
    // Write code here that turns the phrase above into concrete actions
    const response = login();
    return response.status;
  });
Then('the response should contain the user details', function () {
  const response = login();
  return response.data;
});


