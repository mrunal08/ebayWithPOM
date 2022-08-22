const assert = require("assert");
const sleep = ms => new Promise(res => setTimeout(res, ms));

class AdvancePage {

    async navigateToAdvancePage(driver,By) {
        await driver.findElement(By.id("gh-as-a")).click();
    };

    async getTitle(driver,By,assert,expectedAdvanceTitle){
        await sleep(1500);
        let pageTitle = await driver.findElement(By.id("gh-title")).getText();
        assert.equal(pageTitle,expectedAdvanceTitle)
        console.log(pageTitle,expectedAdvanceTitle);
    }

    async navigateBackToEbay(driver,By,assert,expectedHomePageUrl){
        await driver.findElement(By.id("gh-la")).click(driver,By);
        let homePageUrl= await driver.getCurrentUrl(driver,By);
        assert.equal(homePageUrl,expectedHomePageUrl)
        console.log(homePageUrl,expectedHomePageUrl);
    }

}

module.exports = new AdvancePage();