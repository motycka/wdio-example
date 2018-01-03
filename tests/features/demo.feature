Feature: Sample Cucumber Feature

  Scenario: Your typical login scenario

    Given user is on the login page
    When he enters username test@clevermaps.cz and password xXxXxXx
    And he checks Remember me option
    And he clicks Sign In
    Then he is signed in
