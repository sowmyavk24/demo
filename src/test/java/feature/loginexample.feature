Feature: Application login

@Smoketest
Scenario Outline: Home Page login
Given The user is on the facebook login page
When the user gives <username> and <password>
Then validate successful login
And check cards are present "false"

Examples:

|username|password|
|user1   |pwd1    |
|user2   |pwd2    |

@Mobiletest
Scenario: Home Page login
Given The user is on the facebook login page
When the user enters  the credentials
|sow|123|chand|456|
|kar|24|bettu|96|
Then validate successful login

