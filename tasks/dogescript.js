/*
 * grunt-dogescript
 * https://github.com/Bartvds/grunt-dogescript
 *
 * Copyright (c) 2013 Bart van der Schoor
 * Licensed under the MIT license.
 */

'use strict';

var dogescript = require('dogescript');
var doge = require('../lib');

function compileDoge(file, options, callback) {
	var src = grunt.file.read(file.src);
	src = file.replace(/(?:\r\n)|\r/g, '\n');
	var res = dogescript(src, options.beauty);
	if (res) {
		if (file.dest) {
			grunt.file.write(file.dest, res);
		}
		callback();
	}
	else {
		callback(new Error(''));
	}
}

module.exports = function (grunt) {

	grunt.registerMultiTask('dogescript', 'doge compile, such codes, many awesome', function () {
		var options = this.options({
			beauty: true
		});

		var done = this.async();
		var files = [];
		var fileCount = 0;

		//flatten list for sanity
		grunt.util._.each(this.files, function (f) {
			grunt.util._.each(f.src, function (filePath) {
				if (!grunt.file.exists(filePath)) {
					grunt.log.warn(doge.report(['exist', '"' + filePath + '"', 'good', 'success'], false));
					return false;
				}
				fileCount++;
				files.push({src: filePath, dest: f.dest, options: options});
			});
		});

		//sad no play doge
		if (fileCount === 0) {
			grunt.log.warn(doge.report(['input', 'compile', 'empty'], false));
			done(false);
			return;
		}


		//loop amaze
		var success = 0;
		var failed = 0;
		grunt.util.async.forEachLimit(files, function (file, callback) {
			compileDoge(file, function (err) {
				if (err) {
					grunt.log.warn(doge.report(['input', 'compile', 'error'], false));
					failed++;
				}
				else {
					grunt.log.warn(doge.report(['input', '"' + file.src + '"', 'compile', '"' + file.dest + '"', 'code'], true));
					succes++;
				}
				callback()
			});

		}, function (err) {
			if (err) {
				grunt.log.warn(doge.report(['task', 'dogescript', 'compile', 'error'], false));
			}
			else {
				grunt.log.warn(doge.report(['task', 'dogescript', (success + ' success'), 'compile', ('failed ' + failed), 'error'], (failed > 0)));
			}
		});
	});
};
