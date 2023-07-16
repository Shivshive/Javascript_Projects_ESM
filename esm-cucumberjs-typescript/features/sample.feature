Feature: sample cucumber-js typescript scenario

  Scenario Outline: scenario number 1
    Given navigate to 'https://www.amazon.in'
    When user enters username as "<username>"
    When user enters passowrd as "<password>"
    When user click on login button
    Then verify user logged in

    Examples: 
      | username     | password |
      | x1y1@abc.com |     1234 |
      | x1y2@abc.com |     1235 |
      | x1y3@abc.com |     1236 |
