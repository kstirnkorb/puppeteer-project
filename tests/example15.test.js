const puppeteer = require('puppeteer');

(async () => {
    describe('My Sixteenth Puppeteer Test', () => {
        it('should launch the browser', async function() {

            const browser = await puppeteer.launch({
                headless: false,
                slowMo: 10,
                // devtools: true,
              });
            const page = await browser.newPage();
            await page.goto('https://example.com');
            await page.screenshot({path: 'example.png'});
            await page.waitForTimeout(10000);

            await page.close();
          
            await browser.close();

        })
    })
})();
