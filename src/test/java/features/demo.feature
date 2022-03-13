Feature: Coupons and Affilliate

  Background: Login
    Given User navigates to uniform website
    When user enters  "admin" and "Admin@123"
    And User clicks on login button
    Then Dashboard is displayed

  @Coupons
  Scenario Outline: Add new coupons
    Given User navigates to coupons section
    When user enters a "<coupon name>" and "<code>"
    And Clicks on save button
    Then Coupon is successfully added

    Examples: 
      | coupon name | code  |
      | zoom        | zoo12 |

  @delete
  Scenario: Delete Coupon
    Given User navigates to coupons section
    When user clcks the checkbox of coupon to be deleted
    And User clicks the delete icon and accept the pop up
    Then Coupon  successfully deleted

  @edit
  Scenario Outline: Edit the coupon
    Given User navigates to coupons section
    When User clicks the edit icon
    And user enters a valid "<coupon name>" and "<code>"
    And Clicks on save button
    Then the row should be edited and added to database along with proper message

    Examples: 
      | coupon name | code  |
      | zoom        | zoo12 |

  @addaffilliate
  Scenario Outline: Add New Affilliate
    Given User navigates to affilliate section
    Then User moves to add affiliate page
    And User enters all required fields "<fname>" "<lname>" "<tel>" "<pswrd>" "<cnfrmpswrd>" "<adrss>" "<city>" "<pcode>"
    And Selects the country and region
    Then Move to payment details
    And Enters "<cheque_payee_name>"
    Then Click on Save button
    Then the above entered information should be added and verified with email

    Examples: 
      | fname | lname | tel        | pswrd | cnfrmpswrd | adrss         | city   | pcode  | cheque_payee_name |
      | Happy | Singh | 8797345763 | abc12 | abc12      | Homi st, Fort | Mumbai | 400001 | Rudra             |

  @filter
  Scenario Outline: Filter out search results
    Given User navigates to affilliate section
    Then fills the "<affilliate_name>" "<date>"
    And clicks on Filter button
    Then Expected results should be displayed

    Examples: 
      | affilliate_name | date       |
      | pop             | 2022-03-13 |
