const puppeteer = require('puppeteer');

let scrapper = async (pathname) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  console.log(111);
  await page.goto('http://localhost:3000'+pathname, { waitUntil: 'networkidle0' });/*, { waitUntil: 'networkidle0' }*/
  console.log(222);
  /* Run javascript inside of the page */
  let data = await page.evaluate(() => {
    let html = document.querySelector('html').outerHTML;
    return {html}
  });
  /* Outputting what we scraped */
  console.log(data);
  await browser.close();
  console.log(333);
  return data
}

module.exports = scrapper;