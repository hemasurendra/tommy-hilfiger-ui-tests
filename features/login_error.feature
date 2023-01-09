Feature: Login validations on Tommy Hilfigher website

    Scenario: User logs in without credentials
        Given user is on the login page
        Then user should see LoginPage error on username and password fields

    Scenario Outline: Validate login error when User tries to login without entering username
        Given user is on the login page
        Then user should see LoginPage error on username field and password is <password>

        Examples:
            | password |
            | 123456   |


    Scenario Outline: Validate login error when User tries to login without entering password
        Given user is on the login page
        Then user should see LoginPage error on password field and username is <username>

        Examples:
            | username                  |
            | hemasurendra@gmail.com |

    Scenario Outline: Validate login error when user enters wrong credentials

        Given user is on the login page
        When user logs in with <username> and <password>
        Then user should see LoginPage error saying username or password is not matching

        Examples:
            | username                  | password |
            | hemasurendra@gmail.com | 12345678 |

