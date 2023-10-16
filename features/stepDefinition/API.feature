@create_user

Feature: Testing API

Scenario: Create a new user
  Given I have a valid bearer token
  When I send a POST request to "/public-api/users" with valid user data
  Then the response status code should be 201
  And the response should contain the user details

@get_user_details


Scenario: Get user details
  Given I have a valid bearer token
  When I send a GET request to "/public-api/users"
  Then the response status code should be 200
  And the response should contain the user details



@update_user

Scenario: Update user details
  Given I have a valid bearer token
  When I send a PUT request to "/public-api/users/<userId>" with updated user data
  Then the response status code should be 200
  And the response should contain the updated user details