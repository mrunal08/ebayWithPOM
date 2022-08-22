Feature: Feature Login File

    User wants to login to github

    Scenario: On ebay site navigate to Advanced Search

        Given user navigates to ebay page "https://www.ebay.com/"
        When user clicks on Advanced Search button and navigates to "https://www.ebay.com/sch/ebayadvsearch"
        Then User checks title should be "Advanced Search" and by clicking on ebay icon navigate back to homePage "https://www.ebay.com/"


    Scenario: Ebay Search for keyword Jurassic

        Given User is on homePage "https://www.ebay.com/"
        When user searches for keyword "Jurassic" and selects categories as "DVDs and Movies" and click Search
        Then if the number of search result > 1000 comment Successful in console


