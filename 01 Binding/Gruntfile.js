module.exports = function(grunt){
  grunt.initConfig({

  })

  grunt.loadNpmTasks('grunt-contrib-uglify')

  grunt.registerTask('default',['uglify'])
}