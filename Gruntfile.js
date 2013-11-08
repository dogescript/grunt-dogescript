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

	var path = require('path');

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
			bad: {
				src: ['./test/cases/bad/doge.djs']
			},
			compiler: {
				options: {
					compiler: path.resolve('./node_modules/dogescript/index.js')
				},
				src: ['./test/cases/compiler/doge.djs']
			},
			bad_compiler: {
				options: {
					compiler: './node_modules/__non_existing__/index.js'
				},
				src: ['./test/cases/_compiler_/doge.djs']
			}
		}

	});
	grunt.registerTask('good_doge', ['dogescript:basic', 'dogescript:compiler']);
	grunt.registerTask('bad_doge', ['dogescript:bad', 'dogescript:bad_compiler']);

	grunt.registerTask('default', ['test']);
	grunt.registerTask('build', ['clean', 'jshint', 'good_doge', 'continueOn', 'bad_doge', 'continueOff']);
	grunt.registerTask('test', ['build']);

};
