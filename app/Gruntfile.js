module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    watch: {
      files: '/sass/**/*.scss',
      tasks: ['sass', 'cssmin']
    },
    sass: require('./modules/sass').task,
    cssmin: require('./modules/cssmin').task,
    uglify: {
      js: {
        src: ['js/main.js'],
        dest: 'js/main.min.js'
      }
    }
  });
};