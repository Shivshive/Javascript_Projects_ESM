import { describe, it } from "@jest/globals";

describe("puppeteer-lins-test-suite", function () {
  const URL = "https://pptr.dev/api";

  it("puppetter-links-test-list-links-text-example-$$eval", async function () {
    await page.goto(URL, {
      waitUntil: "networkidle0",
    });

    const anchor_hrefs = await page.$$eval(
      "div.theme-doc-markdown.markdown h2.anchor:has(a):first-of-type  + table a",
      (anchor) => {
        console.log(typeof anchor);
        return anchor.map((a) => a.innerText);
      }
    );

    console.log(anchor_hrefs);
  });

  it("puppeteer-links-test-list-links-text-example-evaluate", async function () {
    await page.goto(URL, {
      waitUntil: "networkidle0",
    });

    const textList = await page.evaluate((sel) => {
      return Array.from(document.querySelectorAll(sel)).map((v) => {
        return v.innerText;
      });
    }, "div.theme-doc-markdown.markdown h2.anchor:has(a):first-of-type  + table a");

    console.log(textList);
  });
});
