Feature: User logs in to Tommy Hilfigher website

  Scenario Outline: As a user, I can log into my tommy account

    Given user is on the login page
    When user logs in with <username> and <password>
    Then user should see logged-in icon

    Examples:
      | username               | password  | message |
      | hemasurendra@gmail.com | Apple@123 | Hoi!    |
