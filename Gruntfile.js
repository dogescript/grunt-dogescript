/*
 * grunt-dogescript
 * https://github.com/Bartvds/grunt-dogescript
 *
 * Copyright (c) 2013 Bart van der Schoor
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-continue');

	grunt.loadTasks('tasks');

	grunt.initConfig({
		clean: {
			test : ['./test/cases/**/*.js']
		},
		jshint: {
			options:{
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'lib/**/*.js',
				'tasks/**/*.js'
			]
		},
		dogescript: {
			basic: {
				options: {
					beauty: true
				},
				src: ['./test/cases/basic/doge.djs']
			},
			not: {
				src: ['./test/cases/pretty/doge.djs']
			}
		}

	});
	grunt.registerTask('good_doge', ['dogescript:basic']);
	grunt.registerTask('bad_doge', ['dogescript:not']);

	grunt.registerTask('default', ['test']);
	grunt.registerTask('build', ['clean', 'jshint', 'good_doge', 'continueOn', 'bad_doge', 'continueOff']);
	grunt.registerTask('test', ['build']);

};
