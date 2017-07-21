var JasmineHtmlReporter = require('protractor-jasmine2-html-reporter');
var reportConfig = {
  savePath: './reports',
  screenshotsFolder: 'screenshots',
  takeScreenshots: true,
  takeScreenshotsOnlyOnFailures: false,
  fixedScreenshotName: true,
  fileName: 'Report',
  fileNamePrefix: '_',
  fileNameSuffix: '_',
  fileNameSeparator: '_',
  fileNameDateSuffix: true,
  showPassed: true,
};

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  framework: 'jasmine2',

  suites: {
    get: './tests/whtest.js'
  },

  capabilities: {
    'browserName': 'chrome', //'firefox' or 'safari'
    'chromeOptions': {
      'args': ['no-sandbox']
    }
  },

  onPrepare: function() {
    browser.driver.manage().window().maximize();
    jasmine.getEnv().addReporter(
      new JasmineHtmlReporter(reportConfig)
    );
  }
}
