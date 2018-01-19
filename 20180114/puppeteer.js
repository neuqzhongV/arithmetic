const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch({
        headless: false
    })
    const page = await browser.newPage()
    await page.goto('http://www.nobook.com.cn');

    await page.click('#nb_loginbtn')
  
    await page.waitFor(1000);
})();