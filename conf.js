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
    //maximize window
    browser.driver.manage().window().maximize();
  }
}
