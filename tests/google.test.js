import puppeteer from 'puppeteer';

describe('Google', () => {
    let browser;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false,
        });
    });

    it('should display "google" text on page', async () => {
        const userAgent = await browser.userAgent();
        const page = await browser.newPage();

        await page.goto('https://www.google.com/');

        const title = await page.title();

        console.log(userAgent);

        expect(title).toMatch('Google');

        await delay(3000);
        await browser.close();
    });
});

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}