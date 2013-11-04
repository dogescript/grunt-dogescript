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
					beauty: false
				},
				src: ['./test/cases/basic/doge.djs']
			},
			beauty: {
				options: {
					beauty: true
				},
				src: ['./test/cases/pretty/doge.djs']
			}
		},
		compare: {
			all: {
				options: {
					fixtures: './test/expected',
					cases: './test/cases',
					newline: true
				},
				src: ['./test/**/*.js']
			}
		}
	});

	grunt.registerTask('default', ['test']);
	grunt.registerTask('test', ['clean', 'jshint', 'dogescript', 'test']);

};
