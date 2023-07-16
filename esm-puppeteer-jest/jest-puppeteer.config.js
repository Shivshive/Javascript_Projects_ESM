export default {
  launch: {
    dumpio:true,
    headless: false,
    args: ["--start-maximized"],
  },
  browserPerWorker: true,
};
// export default {
//   globalSetup: "./setup.js",
//   globalTeardown: "./teardown.js",
//   testEnvironment: "./puppeteer_environment.js",
// };
