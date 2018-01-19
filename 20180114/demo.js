const puppeteer = require('puppeteer');
// let driver = chrome.Driver.createSession(options, service);
// // 设置脚本超时的最大时间
// driver.manage().timeouts().setScriptTimeout(10000000);
// var delay = 1000
puppeteer.launch({
    headless: false
}).then(async browser => {
    const page = await browser.newPage()
    page.setViewport({
        width: 1200,
        height: 800
    })
    try {
        await page.goto('http://192.168.1.111:3030/debug_version/PHYSICS/PHYSICS_P-[dev-common]-F-[develop]-C-[]');
        // await timeout(2)

        var login = await page.$('.login-btn-test')
        await login.click(), {
            delay: 100
        }

        // var loginPhoneOrEmail = 
        // await page.click('.ng-pristine')
        // console.log('loginPhoneOrEmail:', loginPhoneOrEmail);
        // await page.type('.dropdown-menu .ng-invalid', '15811524276', {
        //     delay: 20
        // })
        await page.$$eval('.ng-invalid', divs => {
            console.log(divs);
            debugger;
            for (let i = 0; i < divs.length; i++) {
                if (divs[i].placeholder === '手机号/用户名') {
                    divs[i].text = '15811524276';
                    console.log(123);
                }
                if (divs[i].placeholder === '密码') {
                    divs[i].text = '15811524276';
                    console.log(234);
                }
            }
        })

        // var password = await page.$('.ng-pristine')
        // console.log('password:', password);
        // await password.click()
        // await page.type('.dropdown-menu .ng-invalid', '15811524276', {
        //     delay: 20
        // })

        // var authLogin = await page.$('.btn-block-test')
        // console.log('authLogin:', authLogin);
        // await authLogin.click()
    } catch (e) {
        console.log('sf err:', e);
    }

})