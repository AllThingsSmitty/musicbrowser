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
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'styles',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      }
    },
    cssmin: require('./modules/cssmin').task,
    uglify: {
      js: {
        src: ['js/main.js'],
        dest: 'js/main.min.js'
      }
    }
  });
};