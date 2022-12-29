const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`file://${__dirname}/index.html`);
  const element = await page.$('.myElement');
  await browser.close();
})();
