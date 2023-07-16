import Util from "../utils/utility.js";

(async function (url) {
  const utils = new Util();

  const page = await utils.startBrowser();
  // start

  await page.goto(url, {
    waitUntil: "networkidle0",
  });


  await utils.waitForPageLoad(15000);

  const anchor_hrefs = await page.$$eval(
    "div.theme-doc-markdown.markdown h2.anchor:has(a):first-of-type  + table a",
    (anchor) => {
      console.log(typeof anchor);
      return anchor.map((a) => a.innerText);
    }
  );

  console.log(anchor_hrefs);

 
  // end
 await utils.tearDown();
})("https://pptr.dev/api");
