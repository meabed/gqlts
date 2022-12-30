const puppeteerTest = require('puppeteer');
const assert = require('assert');
function sleep(millisecondsCount) {
  if (!millisecondsCount) {
    return;
  }
  return new Promise((resolve) => setTimeout(resolve, millisecondsCount)).catch();
}
(async () => {
  const browser = await puppeteerTest.launch();
  const page = await browser.newPage();
  await page.goto(`file://${__dirname}/index.html`);
  await sleep(1000);
  const element = await page.$('#test1-result');
  const text = await page.evaluate((element) => element.textContent, element);
  assert.equal(text, 'Hello John Connor - your secret is Sarah Connor');
  await browser.close();
})();
