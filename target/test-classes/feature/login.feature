Feature: Application login

@RegTest
Scenario: Home Page login
Given The user is on the facebook login page
When the user enters "sowmya" and "123"
Then validate successful login
And check cards are present "true"

@Smoketest
Scenario: Home Page login
Given The user is on the facebook login page
When the user enters "ramya" and "1234"
Then validate successful login
And check cards are present "false"



