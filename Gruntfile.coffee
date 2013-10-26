module.exports = (grunt) ->
  require('load-grunt-tasks')(grunt)
  grunt.initConfig require("load-grunt-config") grunt,
    configPath: "tasks/options"

  grunt.task.registerTask 'test', [
    'emberhandlebars'
    'coffee'
    'karma'
    'coffeelint'
  ]
