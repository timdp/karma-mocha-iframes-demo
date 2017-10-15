module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS', 'Chrome', 'Firefox'],
    frameworks: ['mocha', 'mocha-iframes', 'dirty-chai'],
    files: ['test/**/*.spec.js'],
    reporters: ['spec']
  })
}
