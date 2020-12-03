// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  // https://stackoverflow.com/questions/33757170/protractor-run-specific-test-as-mobile-device
  // https://github.com/angular/protractor/issues/605
  // Can emulate mobile on specific spec files.
  // capabilities: {
  //   'browserName': 'chrome',
  //   'chromeOptions': {
  //     'mobileEmulation': {
  //       'deviceName': 'Pixel 2'
  //     }
  //   }
  // },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};