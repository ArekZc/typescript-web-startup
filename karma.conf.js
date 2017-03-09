// Karma configuration
var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    basePath: './',

    frameworks: ['mocha', 'chai', 'sinon'],

    files: [
      'tests/**/*.ts'
    ],

    preprocessors: {
      'tests/**/*.ts': ['webpack', 'sourcemap'],
    },

    mime: {
      'text/x-typescript': ['ts','tsx']
    },

    // webpack configuration
    webpack: {
      devtool: 'inline-source-map',
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    },

    webpackMiddleware: {
      stats: 'errors-only'
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false
  })
}