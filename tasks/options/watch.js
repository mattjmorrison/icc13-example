module.exports = {
    coffee: {
        files: 'src/*.coffee',
        tasks: ['coffee']
    },
    handlebars: {
        files: 'src/templates/*.handlebars',
        tasks: ['emberhandlebars'],
    }
};
