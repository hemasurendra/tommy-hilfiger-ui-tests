Feature: Validating the Password length error message while logging in

  Scenario Outline: User validates the error message when logged in with less characters in password field

    Given user is on the login page
    When user logs in with <username> and <password>
    Then user should see LoginPage error with text password should be minimum 5 to 20 characters

    Examples:
      | username               | password |
      | hemasurendra@gmail.com | 1234     |