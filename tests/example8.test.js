const puppeteer = require('puppeteer');

describe('My Ninth Puppeteer Test', () => {
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
        console.log('Text in the H1: ' + text);

        await browser.close();
    })
})
