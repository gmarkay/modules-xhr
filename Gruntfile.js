module.exports = function(grunt){
  
  grunt.initConfig({
    browserify: {
      'dist/bundle.js': ['scripts/module.js']
    },
    jshint: {
      files: ['scripts/**/*.js'],
    options: {
      predef: ['document', 'console'],
      esnext: true,
      globalstrict: true,
      globals: {},
      browserify: true
      }
    },
    watch: {
      javascripts: {
        files: ['scripts/**/*.js'],
        tasks: ['jshint', 'browserify']
      }
    }
  });

  require('matchdep')
    .filter('grunt-*')
    .forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['jshint', 'browserify', 'watch']);
}