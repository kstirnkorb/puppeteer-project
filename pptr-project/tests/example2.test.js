const puppeteer = require('puppeteer');

describe('My Third Puppeteer Test', () => {
    it('should launch the browser', async function() {
          example();
          
          async function example() {

              const browser = await puppeteer.launch({
                headless: true,
                slowMo: 10, // slow down by 10ms
                devtools: true,
              });
          
              const page = await browser.newPage();
          
              await page.setViewport({ width: 1366, height: 768});
              await page.goto('https://www.tools4testing.com/contents/selenium/testpages/registration-form-testpage');
          
              // wait for some time before closing, specify time in milliseconds
              await wait(5000);
          
              await browser.close();
          }
          
          async function wait(time) {
              return new Promise(function(resolve) {
                  setTimeout(resolve, time)
              });
          };
    })
})
