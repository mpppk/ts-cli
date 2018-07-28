import * as puppeteer from 'puppeteer';

export const screenshot = (url: string, fileName: string) => {
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({path: fileName + '.png'});

    await browser.close();
  })();
};
