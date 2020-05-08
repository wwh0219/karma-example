// Karma configuration
// Generated on Fri May 08 2020 20:04:33 GMT+0800 (GMT+08:00)
const webpackConfig = require('./webpack.config')
const isTestDebug = !!process.env.TEST_DEBUG
const file = require('yargs').argv.file
module.exports = function (config) {
  const conf = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: file ? [file]: [
      'test/**/*.spec.ts',
      'test/**/*.spec.tsx',
      'test/**/*.spec.js',
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/**/*.{ts,js,tsx,vue,tsx}': ['webpack', 'sourcemap'],
    },
    webpack: webpackConfig,
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: isTestDebug ? config.LOG_INFO : config.LOG_DISABLE,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: isTestDebug,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeHeadless'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: !isTestDebug,

    // Concurrency level
    // how many browser should be started simultaneous

  }
  if (!isTestDebug) {
    conf.reporters.unshift('coverage-istanbul')
    config.coverageIstanbulReporter = {
      reports: ['html-spa', 'text-summary'],
      fixWebpackSourcePaths: true,
      combineBrowserReports: true,
    }
  }
  config.set(conf)
}
