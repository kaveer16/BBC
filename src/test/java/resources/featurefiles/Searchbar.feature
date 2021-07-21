Feature: As a sports user, I would like to read about all articles related to sports

  Scenario: Use the search option to find all articles related to ‘sports’. Output the first heading and the last heading returned on the page
    Given I am on www.bbc.co.uk homepage
    And I click on Search bar
    And I am on search page
    When I enter "sports" in the search bar
    And I click on the search icon button
    Then I should able to read all articles related 'sports'