Feature: As a QA, I would like to verify all negative scenarios for login

  Scenario Outline: : User should not be able to login with invalid credential
    Given User am on www.bbc.co.uk homepage
    And User Click on Yes I agree Link
    And  User click on Sign in tab
    And User am on Sign in page
    When User enter username as "<username>"
    And User enter password as "<password>"
    And User click on Sign in button
    Then Sign in should be unsuccessful
    Examples:
        | username     |   password   |
        | raj111       |   12ab3c     |
        | JOHN89       |   568905     |
        |              |   Abc12      |
        | Daniel       |              |
