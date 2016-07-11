module.exports = function(grunt) {
  grunt.initConfig({
  	watch: {
  		images: {
  			files: ['src/images/*'],
  			tasks: ['copy:images']
  		},
  		js: {
  			files: ['src/es6/*.{es6,js}'],
  			tasks: ['babel:dev']
  		},
  		js_lib: {
  			files: ['src/es6/lib/*'],
  			tasks: ['babel:dev_lib']
  		},
      sass: {
        files: ['src/sass/**/*.sass'],
        tasks: ['sass:dev']
      }
  	},
  	copy: {
  		images: {
  			files: [{
  				expand: true,
  				cwd: 'src',
  				src: ['images/*'],
  				dest: 'img'
  			}]
  		}
  	},
  	babel: {
  		dev: {
  			options: {
  				sourceMap: true,
  				presets: 'es2015'
  			},
  			files: [{
  				expand: true,
  				cwd: 'src/es6',
  				src: '*.{es6,js}',
  				dest: 'assets/js/',
  				ext: '.js'
  			}]
  		},
  		dev_lib: {
  			options: {
  				sourceMap: false,
  				presets: 'es2015'
  			},
  			files: [{
  				expand: true,
  				cwd: 'src/es6/lib',
  				src: '*',
  				dest: 'assets/js/lib',
  				ext: '.js'
  			}]
  		}
  	},
  	sass: {
  		dev: {
  			options: {},
  			files: [{
  				expand: true,
  				cwd: 'src/sass/',
  				src: 'main.sass',
  				dest: 'assets/css/',
  				ext: '.css'
  			}]
  		}
  	}
  })
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-babel');

  grunt.registerTask('default',['watch']);
}