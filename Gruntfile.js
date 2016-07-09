module.exports = {
  grunt.initConfig({
  	watch: {
  		assets: {
  			files: ['src/images/*'],
  			tasks: ['copy:assets']
  		}
  	},
  	copy: {
  		tasks: {
  			files: [{
  				expand: true,
  				cwd: 'src',
  				src: ['images/*'],
  				dest: 'img'
  			}]
  		}
  	}
  })
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default',['watch']);
}