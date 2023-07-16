import puppeteer from "puppeteer";

export default class Util {
  #browser;
  #page;

  async startBrowser() {
    this.browserContext_ = await puppeteer.launch({
      headless: false,
      defaultViewport: false,
      args: ["--disable-notifications", "--start-maximized"],
    });
    this.page_ = await this.browserContext_.newPage();
    return this.page_;
  }

  get browserContext_() {
    return this.#browser;
  }

  set browserContext_(browserContext) {
    this.#browser = browserContext;
  }

  get page_() {
    return this.#page;
  }

  set page_(page) {
    this.#page = page;
  }

  async tearDown() {
    return this.#browser.close();
  }

  async waitForPageLoad(timeout) {
    return this.page_.waitForFunction(() => document.readyState == "complete",{timeout:timeout});
  }
}
