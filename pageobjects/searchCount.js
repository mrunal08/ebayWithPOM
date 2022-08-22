const assert = require("assert");

const sleep = ms => new Promise(res => setTimeout(res, ms));

class SearchCount {

    async searchKeyword(driver,By,searchText){
        await sleep(1500);
        let searchB = await driver.findElement(By.xpath('//*[@id="gh-ac"]'));
        searchB.sendKeys(searchText);
        await sleep(1500);
    }
   
    async dropDownClick(driver,By,category){
        var dropDown = await driver.findElement(By.id("gh-cat"))
        await dropDown.click();
        await driver.findElement(By.xpath('//*[@id="gh-cat"]/option[16]')).click()
        await sleep(1500);
        await driver.findElement(By.id("gh-btn")).click();
    }

    async checkSearchCount(driver,By,int){
        let a =await driver.findElement(By.xpath('//*[@id="mainContent"]/div[1]/div/div[2]/div[1]/div[1]/h1/span[1]')).getText();
        let actualSearchCount;
        a=a.replace(/\,/g,''); 
        a=parseInt(a,10);
        actualSearchCount = a ;
        console.log(a,actualSearchCount);
        if(actualSearchCount > int){
            console.log("Successfully found "+ actualSearchCount+" matches");
        }
        else{
            console.log("Search matches "+actualSearchCount+"found are less than 1000");
        }
       
    }


}

module.exports = new SearchCount();