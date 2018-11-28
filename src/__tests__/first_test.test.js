const puppeteer = require('puppeteer');

test('First Test', async () => {
    let browser = await puppeteer.launch({
        headless: true
    });
    let page = await browser.newPage();

    await page.goto('https://myretail-ecaldwe1.herokuapp.com/');
    await page.waitForSelector('.App-title');

    const html = await page.$eval('.App-title', e => e.innerHTML);
    expect(html).toBe('myRetail');

    browser.close();
}, 100000)