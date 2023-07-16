import Util from "../utils/utility.js";

(async function (url) {
  const utils = new Util();

  const page = await utils.startBrowser();
  // start
  // start

  await page.goto(url, {
    waitUntil: "networkidle0",
  });

  await utils.waitForPageLoad(15000);

  const textList = await page.evaluate((sel) => {
    return Array.from(document.querySelectorAll(sel)).map((v) => {
      return v.innerText;
    });
  }, "div.theme-doc-markdown.markdown h2.anchor:has(a):first-of-type  + table a");

  console.log(textList);

  // end
  await utils.tearDown();
})("https://pptr.dev/api");
