const puppeteer = require('puppeteer');

describe('My Tenth Puppeteer Test', () => {
    it('should launch the browser', async function() {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 10,
            // devtools: true,
          });
        
        const page = await browser.newPage();

        await page.setViewport({ width: 1366, height: 768});
        await page.goto('http://example.com/');
        const title = await page.title();
        const url = await page.url();
        const text = await page.$eval('h1', element => element.textContent);
        const count = await page.$$eval('p', element => element.length);
        console.log('Text in the H1: ' + text);
        console.log('Number of P tags on the page: ' + count);

        await browser.close();
    })
})
