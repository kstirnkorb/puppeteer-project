# puppeteer-project
My take on Puppeteer example include device and e2e and helper functions.

# Installation pre-requisites

IMPORTANT: Please use the latest Node and especially NPM, to make sure the package-lock.json is used.


# How To install this repository

Its also possible to install the modules as usual using npm:

    npm install

NPM 5 or above has the big advantage that if you use it you will be installing the exact same dependencies than I installed in my machine, so you wont run into issues caused by semantic versioning updates.

This should take a couple of minutes. If there are issues, please post the complete error message in the Questions section of the course.

# To Run the npm run test, npm run test:device and npm run test:e2e

In order to be able to provide realistic examples, we will need in our playground a small REST API backend server. We can start the sample application backend with the following command:

    npm run test
    npm run test:device
    npm run test:e2e

"scripts": {
    "test": "./node_modules/mocha/bin/_mocha --timeout=30000 ./tests",
    "test:device": "./node_modules/mocha/bin/_mocha --timeout=30000 ./tests/device.test.js",
    "test:e2e": "./node_modules/mocha/bin/_mocha --timeout=30000 ./tests/e2e/*.test.js"
}
