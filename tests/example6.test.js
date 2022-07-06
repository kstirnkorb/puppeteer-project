const puppeteer = require('puppeteer');

describe('My Seventh Puppeteer Test', () => {
    it('should launch the browser', async function() {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 10,
            // devtools: true,
          });
        
        const page = await browser.newPage();

        await page.setViewport({ width: 1366, height: 768});
        await page.goto('http://devexpress.github.io/testcafe/example/');
        await page.type('#developer-name', 'Mike', { delay: 0 });
        await page.click('#tried-test-cafe', { clickCount: 1 });
        await page.select('#preferred-interface', 'JavaScript API');
        const message = 'Lets fill that message with some text';
        await page.type('#comments', message);
        await page.click('#submit-button')
        await page.waitForSelector('.result-content')
        await page.waitForTimeout(5000);
        await browser.close();
    })
})
