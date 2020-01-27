Feature: Cari Tempat Cafe
    Search Cafe in tempat.com webpage

    Scenario: As a user I can search cafe from tempat.com webpage
        Given I open tempat.com's homepage
        When I click location point
        And I click "Jakarta Timur" location
        And I type "starbucks"
        Then I should see one of the name of the cafe is "Starbucks Coffee, Rawamangun"
