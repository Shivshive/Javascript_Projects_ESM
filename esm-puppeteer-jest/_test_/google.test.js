import { describe, it, expect } from "@jest/globals";
import sum from "../src/sum";

describe("my-suite", function () {
  it("my-test", function () {
    expect("honey").toEqual("honey");
  });

  it("test-sum-function", async () => {
    expect(sum(1, 2)).toEqual(3);
  });

  it("puppeteer-test-google", async function () {
    await page.setViewport({
      deviceScaleFactor: 1,
      height: 1080,
      width: 1920,
    });
    await page.goto("https://google.com");
    await expect(page.title()).resolves.toMatch("Google");

  });
});
