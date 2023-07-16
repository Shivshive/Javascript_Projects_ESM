module.exports = {
  default: {
    paths: ["features/*.feature"],
    import:["steps/**/*.ts"],
    format: ["html:cucumber-report.html","json:test/report/cucumber_report.json","summary"],
  },
};
