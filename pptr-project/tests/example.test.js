const puppeteer = require('puppeteer');

describe('My First Puppeteer Test', () => {
    it('should launch the browser', async function() {
        // const browser = await puppeteer.launch({ headless: false })
        
        const browser = await puppeteer.launch({
            headless: true,
            slowMo: 10, // slow down by 10ms
            // devtools: true,
          });
        
        const page = await browser.newPage();
        await page.goto('http://example.com/');

        // deprecate 'waitFor' and add 'waitForTimeout'
        // await page.waitForTimeout(3000);
        // await page.waitForSelector('h1');
        // await page.reload();
        // deprecate 'waitFor' and add 'waitForTimeout'
        // await page.waitForTimeout(3000);
        // await page.waitForSelector('h1');

        await page.waitForSelector('h1');
        await page.goto('http://dev.to/');
        // var hrefElement = await page.$('c-link c-link--block justify-center');
        // await hrefElement.click();
        await page.goBack();
        await page.waitForSelector('h1');
        await page.goForward();
        // var hrefElement1 = await page.$('c-link c-link--block justify-center');
        // await hrefElement1.click();

        await browser.close();
    })
})
