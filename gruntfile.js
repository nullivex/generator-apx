module.exports = function(grunt){

  //config
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: true,
        reporter: require('jshint-stylish')
      },
      dev: [
        'action/*.js',
        'app/*.js',
        'helper/*.js',
        'initializer/*.js',
        'service/*.js',
        'task/*.js',
        'test/*.js',
        'translator/*.js'
      ]
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/*.test.js']
      }
    },
    watch: {
      dev: {
        files: ['**/*.js'],
        tasks: ['test']
      }
    },
    projectUpdate: {
      update: {}
    }
  })

  //load tasks
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-mocha-test')
  grunt.loadNpmTasks('grunt-project-update')

  //macros
  grunt.registerTask('update',['projectUpdate'])
  grunt.registerTask('test',['jshint','mochaTest'])
  grunt.registerTask('dev',['watch'])

}