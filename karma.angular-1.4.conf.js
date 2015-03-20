// an example karma.conf.js
module.exports = function(config) {
  config.set({
  	basePath: './',
    files: [
      'bower_components/angularjs/angular.js',
      'src/**/*.js',
      'test/**/*.js'
    ],
    frameworks: ['jasmine'],
    reporters: ['progress'],
    browsers: ['Chrome'],
    singleRun: true
  });
};