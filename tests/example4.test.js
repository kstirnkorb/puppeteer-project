const puppeteer = require('puppeteer');

describe('My Fifth Puppeteer Test', () => {
    it('should launch the browser', async function() {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 10,
            // devtools: true,
          });
        
        const page = await browser.newPage();

        await page.setViewport({ width: 1366, height: 768});
        await page.goto('http://devexpress.github.io/testcafe/example/');
        await page.type('#developer-name', 'Mike', { delay: 1000 });
        await page.waitForTimeout(5000);

        await browser.close();
    })
})
