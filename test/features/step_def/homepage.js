const { Given, When, Then, Before, After} = require('cucumber');
const { Builder, By, until } = require('selenium-webdriver');
var should=require("chai").should()
const assert = require("assert");

let app = require("../../../src/app");
const SearchCount = require("../../../pageobjects/searchCount")
const AdvancePage = require("../../../pageobjects/advancepage")
const NavigateToEbayHome = require("../../../pageobjects/ebayHomePage")

let driver;

Before(async function() {
    driver = new Builder().forBrowser('firefox').build();
});

//First Scenario
Given('user navigates to ebay page {string}',{timeout: 5 * 5000}, async function (homePageUrl) {
    await NavigateToEbayHome.goToEbayHomepage(driver,homePageUrl)
    console.log("Navigated to ebay page successfully");
});

  
When('user clicks on Advanced Search button and navigates to {string}',{timeout: 3 * 5000}, async function (advanceTextUrl) {
    driver.sleep(1000)
    await AdvancePage.navigateToAdvancePage(driver,By,advanceTextUrl)
});


Then('User checks title should be {string} and by clicking on ebay icon navigate back to homePage {string}',{timeout: 3 * 5000}, async function (expectedAdvanceTitle,expectedHomePageUrl) {
    await AdvancePage.getTitle(driver,By,assert,expectedAdvanceTitle)
    await driver.sleep(1000)
    await AdvancePage.navigateBackToEbay(driver,By,assert,expectedHomePageUrl)
});


//Second Scenario
Given('User is on homePage {string}',{timeout: 5 * 5000}, async function (expectedEbayUrl) { 
    await NavigateToEbayHome.goToEbayHomepage(driver,expectedEbayUrl)
});

When('user searches for keyword {string} and selects categories as {string} and click Search', {timeout: 5 * 5000}, async function (searchText,category){
    driver.sleep(1000)
    await SearchCount.searchKeyword(driver,By,searchText)
    driver.sleep(1000)
    await SearchCount.dropDownClick(driver,By,category)
});


Then('if the number of search result > {int} comment Successful in console', {timeout: 3 * 5000},async function (int) {   
    driver.sleep(2000)
    await SearchCount.checkSearchCount(driver,By,int) 
});

After(async function() {
    driver.quit()
});
