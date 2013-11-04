/*
 * grunt-dogescript
 * https://github.com/Bartvds/grunt-dogescript
 *
 * Copyright (c) 2013 Bart van der Schoor
 * Licensed under the MIT license.
 */

'use strict';

var dogescript = require('dogescript');
var doge = require('../lib/doge');

module.exports = function (grunt) {

	function compileDoge(file, options, callback) {
		var src = grunt.file.read(file.src);
		src = src.replace(/(?:\r\n)|\r/g, '\n');
		var res = dogescript(src, options.beauty);
		if (res) {
			grunt.file.write(file.dest, res);
			callback();
		}
		else {
			callback(new Error('much error, compile no'));
		}
	}

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
					grunt.log.writeln(doge.report(['exist', filePath.red, 'good', 'success'], false));

					grunt.log.writeln();
					grunt.log.warn('phantom doge!');
					return false;
				}
				fileCount++;
				var dest = f.dest;
				if (!dest) {
					dest = filePath.replace(/.djs$/, '.js');
				}
				files.push({src: filePath, dest: dest, options: options});
			});
		});

		//sad no play doge
		if (fileCount === 0) {
			grunt.log.writeln(doge.report(['input', 'source', 'files', 'empty', 'work', 'path', 'compile', 'empty'], false));

			grunt.log.writeln();
			grunt.log.warn('silly doge!');
			done(false);
			return;
		}


		//loop amaze
		var success = 0;
		var failed = 0;
		grunt.util.async.forEachLimit(files, 1, function (file, callback) {
			compileDoge(file, options, function (err) {
				if (err) {
					grunt.log.warn(err);
					grunt.log.writeln(doge.report(['input', file.src.red, 'compile', 'error'], false));
					failed++;
				}
				else {
					grunt.log.writeln(doge.report(['input', file.src.green, 'compile', 'build', file.dest.cyan, 'code'], true));
					success++;
				}
				grunt.log.writeln();
				callback();
			});

		}, function (err) {
			if (err) {
				grunt.log.writeln(doge.report(['task', 'dogescript', 'compile', 'error'], false));
				grunt.log.writeln();
				grunt.log.warn('broken doge!');
			}
			else {
				if ((failed > 0)) {
					grunt.log.writeln(doge.report(['task', (success + ' success').yellow, 'compile', ('failed ' + failed).red, 'error'], false));
					grunt.log.writeln();
					grunt.log.warn('bad doge!');
				}
				else {
					grunt.log.writeln(doge.report(['task', (success + ' success').green, 'compile'], true));
					grunt.log.writeln();
					grunt.log.ok('good doge!');
				}
			}
			done();
		});
	});
};
