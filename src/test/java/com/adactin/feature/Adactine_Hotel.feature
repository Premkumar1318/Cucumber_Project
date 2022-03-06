Feature: Hotel Booking In Adactine Application

@SmokeTest
Scenario Outline: Login page
Given User Launch The Application
When User Enter The "<username>" In Username Field
And User Enter The "<password>" In Password Field
Then User Click On The Login Button And It Navigate to search Hotel

Examples:
|username|password|
|ABC|A123|
|XYZ|XA34|
|Premkumar1318|27ICXH|

@SanityTest
Scenario: Search Hotel Page
When User Select The Location
And User Select The Hotels
And User Select The Room Type
And User select The Number Of Rooms
And User Enter The Check In Date
And User Enter The Check Out Date
And User Select The Adults Per Room
And User Select The Children Per Room
Then User Click On The Search Button And It Navigate To Hotel Page

@SanityTest
Scenario: Select Hotel Page
When User Click On The Select Button
Then User Click On The Continue Button And It Navigate To Book Hotel Page

@SmokeTest
Scenario: Book Hotel Page
When User Enter The First Name
And User Enter The Last Name
And User Enter The Billing Address
And User Enter The Credit Card Number 
And User Select The Credit Card Type
And User Select The Expiry Date Month
And User Enter The CVV Number
Then User Click On The Book Now Button And It Navigate To Booking Confirmation Page

@SanityTest
Scenario: My Itinerary Page
Then User Click On The My Itinerary Button And It Navigate To Booked Itinerary Page

@RegressionTest
Scenario: Booked Itinerary Page 
Then User Click On The Logout Button

  



