Feature: Cari Tempat by Category
    Search Places by category in tempat.com webpage

    Scenario: As a user I can search places by restaurant category
        Given I open tempat.com's homepage
        When I click "Restoran" category
        Then I should see my search is filtered by "Restoran"

    Scenario: As a user I can search places by rapat dan acara category
        Given I open tempat.com's homepage
        When I click "Rapat & Acara" category
        Then I shoul be directed to xwork webpage with meeting room filter

    Scenario: As a user I can search places by kantor category
        Given I open tempat.com's homepage
        When I click "Kantor" category
        Then I shoul be directed to xwork webpage with co-working space filter

    Scenario: As a user I can search places by kecantikan category
        Given I open tempat.com's homepage
        When I click "Kecantikan" category
        Then I should see my search is filtered by "Kecantikan"

    Scenario: As a user I can search places by olahraga category
        Given I open tempat.com's homepage
        When I click "Olahraga" category
        Then I should see my search is filtered by "Olahraga"

    Scenario: As a user I can search places by daycation category
        Given I open tempat.com's homepage
        When I click "Daycation" category
        Then I should see my search is filtered by "Daycation"
