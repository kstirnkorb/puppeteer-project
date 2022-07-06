const puppeteer = require('puppeteer');

(async () => {
    describe('My Seventeenth Puppeteer Test', () => {
        it('should launch the browser', async function() {

            const browser = await puppeteer.launch({
                headless: false,
                slowMo: 10,
                // devtools: true,
              });
            let page = await browser.newPage();
            await page.setViewport({ width: 1920, height: 1080 });
            await page.goto('https://en.wikipedia.org/wiki/Main_Page');
            await page.screenshot({ path: './image.png', fullPage: true });
            await page.waitForTimeout(10000);

            await browser.close();

        })
    })
})();
