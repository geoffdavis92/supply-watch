module.exports = {
  grunt.initConfig({
  	watch: {}
  })
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default',['watch'])
}