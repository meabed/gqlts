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
  console.log('testResult1:', text);
  assert.equal(text, 'Hello John Connor - your secret is Sarah Connor');

  // test file upload
  const inputUploadHandle = await page.$('#file-upload-input');
  let fileToUpload = 'test_to_upload.jpeg';
  await inputUploadHandle.uploadFile(fileToUpload);
  const fileUploadSubmit = await page.$('#file-upload-button');
  await fileUploadSubmit.click();
  await sleep(1000);
  const fileUploadResult = await page.$('#file-upload-result');
  const fileUploadResultText = await page.evaluate((element) => element.textContent, fileUploadResult);
  console.log('fileUploadResultText:', fileUploadResultText);
  assert.equal(fileUploadResultText.startsWith('image-19741-'), true);

  console.log('All tests passed');

  await browser.close();
})();
