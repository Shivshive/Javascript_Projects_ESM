import { describe } from "@jest/globals";
import { waitUntilTimeout } from "../src/utils";

describe("wedme-test-suite", function () {
  it("wedme-test", async function () {
    const url = "https://www.wedmegood.com/vendors/indore/";

    await page.setViewport({
      deviceScaleFactor: 1,
      height: 1080,
      width: 1920,
    });

    await page.goto(url, {
      waitUntil: "networkidle0",
    });

    const pageload = await page.waitForFunction(
      () => document.readyState == "complete"
    );

    await pageload;

    await page.hover("a ::-p-text(Vendors)");

    const anchorUrls = await page.$$eval(
      "div:not(.hidden) > div > div.ListingDropDown .fcol a",
      (an) => an.map((a) => a.href)
    );

    for (const site of anchorUrls) {
      try {
        const pg = await globalThis.browser.newPage();
        await pg.goto(site, {
          waitUntil: "networkidle0",
        });

        await pageload;
        await pg.waitForSelector('div.VendorList div[id*="card"]', {
          timeout: 10000,
        });
        const titleList = await pg.$$eval(
          'div.VendorList div[id*="card"]',
          (cds) => {
            let cdsList = [];
            cds.map((c) => {
              let ob = {};
              ob.title = c.querySelector("a.vendor-detail").textContent;
              cdsList.push(ob);
            });
            return cdsList;
          }
        );
        console.log(titleList);
      } catch (error) {}
    }

    // test end
  });
});
