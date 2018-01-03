// Read tags from command line
let tags = ['~@Pending', '~@Ignore'];
if (process.argv !== undefined && process.argv.length) {
  process.argv.forEach((arg) => {
    if (arg.indexOf('--tags=') !== -1) {
      const collectedTags = arg.replace('--tags=', '');
      tags = arg.concat(collectedTags);
    }
  });
}


exports.config = {
    
    baseUrl: 'https://getbootstrap.com',

    specs: [
      'tests/features/demo.feature'
    ],
    suites: {
      demo: ['tests/features/demo.feature'],
      all: [
        'tests/features/demo.feature',
      ]
    },

    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        //
        browserName: 'chrome'
    }],

    sync: true,
    logLevel: 'silent',
    coloredLogs: true,
    deprecationWarnings: true,
    bail: 0,
    screenshotPath: './errorShots/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'cucumber',
    reporters: ['cucumber'],
    cucumberOpts: {
        require: [
          'tests/features/step_definitions/demo.steps.js'
        ],
        backtrace: false,
        compiler: ['js:babel-register'],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tags: [],
        timeout: 20000,
        ignoreUndefinedDefinitions: false,
    },

    before: function before() {
      const chai = require('chai');
      chai.use(require('chai-match'));
      global.expect = chai.expect;
      global.assert = chai.assert;
      global.should = chai.should();
      browser.setViewportSize({
        width: 1600,
        height: 800
      });
    }

};


require('babel-core/register')({
  presets: ['es2015']
});
