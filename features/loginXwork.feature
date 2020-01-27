@skip
Feature: Login
    Login from xwork page

    Scenario: As a user I can login from login page
        Given I open xwork's homepage
        When I click the login button
        And I fill out the login detail with email "nhilmibs@gmail.com" and password "jakartajanuari@2020"
        And I click the submit button
        Then I should see the name of the user is "naufal b hilmi"
