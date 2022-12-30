const puppeteer = require('puppeteer');
const assert = require('assert');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`file://${__dirname}/index.html`);
  const element = await page.$('#test1-result');
  const text = await page.evaluate((element) => element.textContent, element);
  assert.equal(text, 'Hello John Connor - your secret is Sarah Connor');
  await browser.close();
})();
