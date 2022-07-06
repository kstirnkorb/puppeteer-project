module.exports = {
    click: async function(path, selector) {
        try {
            await path.waitForSelector(selector);
            await path.click(selector);
        } catch (error) {
            throw new Error(`Could not click on selector: ${selector}`);
        }
    },
    getText: async function(path, selector) {
        try {
            await path.waitForSelector(selector);
            return await path.$eval(selector, element => element.innerHTML);
        } catch (error) {
            throw new Error(`Cannot get text from selector: ${selector}`);
        }
    },
    getCount: async function(path, selector) {
        try {
            await path.waitForSelector(selector);
            return await path.$$eval(selector, element => element.length);
        } catch (error) {
            throw new Error(`Cannot get couth of selector: ${selector}`);
        }
    },
    typeText: async function(path, selector, text) {
        try {
            await path.waitForSelector(selector);
            return await path.type(selector, text);
        } catch (error) {
            throw new Error(`Could not type into selector: ${selector}`);
        }
    },
    waitForText: async function(path, selector, text) {
        try {
            await path.waitForSelector(selector);
            await path.waitForFunction((selector, text) => {
                document.querySelector(selector).innerText.includes(text),
                    {},
                    selector,
                    text
            });
        } catch (error) {
            throw new Error(`Text: ${text} not found for selector: ${selector}`);
        }
    },
    shouldNotExist: async function(path, selector) {
        try {
            await path.waitForSelector(selector, { hidden: true });
        } catch (error) {
            throw new Error(`Selector: ${selector} is visible, but should not be.`);
        }
    }
}
