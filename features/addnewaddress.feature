Feature: User logs in to Tommy website and adds new address

    Scenario Outline: User logs in to website and adds new address

        Given user is on the login page
        When user logs in with <username> and <password>
        Then user should see logged-in icon
        Then user click on logged in user
        Then user Fill address with firstname <firstname> lastname <lastname> address1 <address1> address2 <address2> city <city> and zipcode <zipcode> ]
        Examples:
            | username                | password    | firstname | lastname   | address1         | address2 | city      | zipcode |
            | hemasurendra@gmail.com  | Apple@123   | hema      | siva       | Noordammerstraat | 83       | Amsterdam | 1013 DX |