module.exports = function(grunt) {

  const mozjpeg = require('imagemin-mozjpeg');

  grunt.initConfig({

    imagemin: {

      options: {
    optimizationLevel: 4,
    svgoPlugins: [{removeViewBox: false}],
    use: [mozjpeg()] // Example plugin usage
},


      dynamic: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'dist/'
        }]

      }

    }


  })
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('default', ['imagemin']);
}
