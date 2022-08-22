class EbayNavigator {
    async goToEbayHomepage (driver,goToEbayHomepage) {
        await driver.get(goToEbayHomepage);
    }
}

module.exports = new EbayNavigator();