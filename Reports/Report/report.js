$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactine_Hotel.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactine Application",
  "description": "",
  "id": "hotel-booking-in-adactine-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login page",
  "description": "",
  "id": "hotel-booking-in-adactine-application;login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enter The \"\u003cusername\u003e\" In Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Enter The \"\u003cpassword\u003e\" In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Click On The Login Button And It Navigate to search Hotel",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactine-application;login-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "hotel-booking-in-adactine-application;login-page;;1"
    },
    {
      "cells": [
        "ABC",
        "A123"
      ],
      "line": 12,
      "id": "hotel-booking-in-adactine-application;login-page;;2"
    },
    {
      "cells": [
        "XYZ",
        "XA34"
      ],
      "line": 13,
      "id": "hotel-booking-in-adactine-application;login-page;;3"
    },
    {
      "cells": [
        "Premkumar1318",
        "27ICXH"
      ],
      "line": 14,
      "id": "hotel-booking-in-adactine-application;login-page;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10652100,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login page",
  "description": "",
  "id": "hotel-booking-in-adactine-application;login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enter The \"ABC\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Enter The \"A123\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Click On The Login Button And It Navigate to search Hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 8033781300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 244594300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A123",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 163678300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_On_The_Login_Button_And_It_Navigate_to_search_Hotel()"
});
formatter.result({
  "duration": 720607200,
  "status": "passed"
});
formatter.after({
  "duration": 249300,
  "status": "passed"
});
formatter.before({
  "duration": 250200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login page",
  "description": "",
  "id": "hotel-booking-in-adactine-application;login-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enter The \"XYZ\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Enter The \"XA34\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Click On The Login Button And It Navigate to search Hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 476589900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "XYZ",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 126776500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "XA34",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 100519600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_On_The_Login_Button_And_It_Navigate_to_search_Hotel()"
});
formatter.result({
  "duration": 556547400,
  "status": "passed"
});
formatter.after({
  "duration": 232100,
  "status": "passed"
});
formatter.before({
  "duration": 197800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login page",
  "description": "",
  "id": "hotel-booking-in-adactine-application;login-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enter The \"Premkumar1318\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Enter The \"27ICXH\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Click On The Login Button And It Navigate to search Hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 441809800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Premkumar1318",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 149152800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "27ICXH",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 119733100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_On_The_Login_Button_And_It_Navigate_to_search_Hotel()"
});
formatter.result({
  "duration": 2012447600,
  "status": "passed"
});
formatter.after({
  "duration": 159300,
  "status": "passed"
});
formatter.before({
  "duration": 159900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Search Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactine-application;search-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User Select The Location",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User Select The Hotels",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User Select The Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User select The Number Of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User Enter The Check In Date",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User Enter The Check Out Date",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User Select The Adults Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User Select The Children Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User Click On The Search Button And It Navigate To Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Location()"
});
formatter.result({
  "duration": 224151700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Hotels()"
});
formatter.result({
  "duration": 163028900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Room_Type()"
});
formatter.result({
  "duration": 174125600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_select_The_Number_Of_Rooms()"
});
formatter.result({
  "duration": 187732500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_Check_In_Date()"
});
formatter.result({
  "duration": 236769000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_Check_Out_Date()"
});
formatter.result({
  "duration": 207628400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Adults_Per_Room()"
});
formatter.result({
  "duration": 184289900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Children_Per_Room()"
});
formatter.result({
  "duration": 212201600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_On_The_Search_Button_And_It_Navigate_To_Hotel_Page()"
});
formatter.result({
  "duration": 1194556500,
  "status": "passed"
});
formatter.after({
  "duration": 176700,
  "status": "passed"
});
formatter.before({
  "duration": 137800,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Select Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactine-application;select-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "User Click On The Select Button",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User Click On The Continue Button And It Navigate To Book Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Click_On_The_Select_Button()"
});
formatter.result({
  "duration": 108032700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_On_The_Continue_Button_And_It_Navigate_To_Book_Hotel_Page()"
});
formatter.result({
  "duration": 1091759800,
  "status": "passed"
});
formatter.after({
  "duration": 127800,
  "status": "passed"
});
formatter.before({
  "duration": 145500,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Book Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactine-application;book-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User Enter The First Name",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User Enter The Last Name",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User Enter The Billing Address",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User Enter The Credit Card Number",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User Select The Credit Card Type",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User Select The Expiry Date Month",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User Enter The CVV Number",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User Click On The Book Now Button And It Navigate To Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_First_Name()"
});
formatter.result({
  "duration": 152644100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_Last_Name()"
});
formatter.result({
  "duration": 111489000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_Billing_Address()"
});
formatter.result({
  "duration": 177832400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_Credit_Card_Number()"
});
formatter.result({
  "duration": 153047500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Credit_Card_Type()"
});
formatter.result({
  "duration": 168195100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Expiry_Date_Month()"
});
formatter.result({
  "duration": 345759100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_CVV_Number()"
});
formatter.result({
  "duration": 135178200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_On_The_Book_Now_Button_And_It_Navigate_To_Booking_Confirmation_Page()"
});
formatter.result({
  "duration": 107518100,
  "status": "passed"
});
formatter.after({
  "duration": 205800,
  "status": "passed"
});
formatter.before({
  "duration": 174900,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "My Itinerary Page",
  "description": "",
  "id": "hotel-booking-in-adactine-application;my-itinerary-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 44,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "User Click On The My Itinerary Button And It Navigate To Booked Itinerary Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Click_On_The_My_Itinerary_Button_And_It_Navigate_To_Booked_Itinerary_Page()"
});
formatter.result({
  "duration": 5183600,
  "status": "passed"
});
formatter.after({
  "duration": 130400,
  "status": "passed"
});
});