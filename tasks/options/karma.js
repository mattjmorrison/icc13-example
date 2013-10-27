module.exports = {
    unit: {
        options: {
            basePath: '.',
            frameworks: ['qunit'],
            colors: true,
            singleRun: true,
            autoWatch: false,
            reporters: ['progress', 'coverage'],
            browsers: ['PhantomJS'],
            files: [
                'bower_components/jquery/jquery.min.js',
                'bower_components/handlebars/handlebars.js',
                'bower_components/ember/ember.js',
                'build/*.js',
                'tests/build/*.js'
            ],
            preprocessors: {
                "build/*.js": "coverage"
            },
            coverageReporter: {
                type: "lcov",
                dir: 'coverage/'
            },
            plugins: [
                'karma-qunit',
                'karma-coverage',
                'karma-phantomjs-launcher'
            ]
        }
    }
};
