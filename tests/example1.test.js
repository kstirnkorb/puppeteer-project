const puppeteer = require('puppeteer');

describe('My Second Puppeteer Test', () => {
    it('should launch the browser', async function() {
        const browser = await puppeteer.launch({
            headless: true,
            slowMo: 10, // slow down by 10ms
            devtools: true,
          });

        var page = await browser.newPage();
        await page.goto('https://example1.com');
        var hrefElement = await page.$('a');
        await hrefElement.click();
      
        await browser.close();
    })
})
