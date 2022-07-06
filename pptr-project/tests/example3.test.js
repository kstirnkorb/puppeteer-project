const puppeteer = require('puppeteer');

describe('My Fouth Puppeteer Test', () => {
    it('should launch the browser', async function() {
          example();
          
          async function example() {

              const browser = await puppeteer.launch({
                headless: false,
                slowMo: 10, // slow down by 10ms
                devtools: true,
              });
          
              const page = await browser.newPage();

              await page.goto('https://wgntv.com/news/');
              await page.$('page');
              await page.$('screen-reader-text');
          
              await browser.close();
          }
    })
})
