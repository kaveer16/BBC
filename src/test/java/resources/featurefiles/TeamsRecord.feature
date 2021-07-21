Feature: As a business user, I would like to make a record of all teams which are playing today

  Scenario: Output all team names with a match today. If there are no matches today, output a message to convey this.
    Given I am on www.bbc.co.uk homepage
    And I click on sport tab header
    And  I am on now sport webpage
    When I click on Football tab
    And I click on Score & Fixtures
    And I click on Today
    Then I should be able to see all team names with a match today
