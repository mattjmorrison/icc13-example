module.exports = {
    coffee: {
        files: 'src/*.coffee',
        tasks: ['coffee']
    },
    handlebars: {
        files: 'src/templates/*.handlebars',
        tasks: ['emberhandlebars'],
    },
    less: {
        files: 'bower_components/bootstrap/less*.less',
        tasks: ['recess']
    }
};
