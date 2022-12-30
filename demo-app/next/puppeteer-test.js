const puppeteerTest = require('puppeteer');
const assert = require('assert');
function sleep(millisecondsCount) {
  if (!millisecondsCount) {
    return;
  }
  return new Promise((resolve) => setTimeout(resolve, millisecondsCount)).catch();
}

async function testElText(page) {
  await sleep(500);
  const element = await page.$('#test1-result');
  const text = await page.evaluate((element) => element.textContent, element);
  assert.equal(text, 'Hello John Connor - your secret is Sarah Connor');
}

(async () => {
  const browser = await puppeteerTest.launch();
  const page = await browser.newPage();
  // client side rendering
  await page.goto(`http://localhost:3000`);
  await testElText(page);
  // server side rendering
  await page.goto('http://localhost:3000/ssr');
  await testElText(page);
  // api routes
  await page.goto('http://localhost:3000/api/say-hello');
  const pageContent = await page.content();
  assert.equal(true, pageContent.indexOf('Hello John Connor - your secret is Sarah Connor') > -1);

  await browser.close();
})();
