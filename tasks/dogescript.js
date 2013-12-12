/*
 * grunt-dogescript
 * https://github.com/Bartvds/grunt-dogescript
 *
 * Copyright (c) 2013 Bart van der Schoor
 * Licensed under the MIT license.
 */

'use strict';

var doge = require('../lib/doge');
var dogescript = require('dogescript');

module.exports = function (grunt) {

	function getCompiler(options) {
		if (options.compiler) {
			if (typeof options.compiler === 'function') {
				return options.compiler;
			}
			else if (typeof options.compiler === 'string') {
				var src = options.compiler;
				try {
					src =  require.resolve(options.compiler);
				}
				catch (e) {
					grunt.log.writeln();
					grunt.log.error('plz compiler ' + src);
					return null;
				}
				return require(src);
			}
			return null;
		}
		return dogescript;
	}

	function compileDoge(compiler, file, options, callback) {
		var src = grunt.file.read(file.src);
		src = src.replace(/(?:\r\n)|\r/g, '\n');

		var res = compiler(src, options.beauty, options.trueDoge);
		if (res) {
			grunt.file.write(file.dest, res);
			callback();
		}
		else {
			callback(new Error('much error compile no'));
		}
	}

	grunt.registerMultiTask('dogescript', 'doge compile many codes', function () {
		var options = this.options({
			beauty: true,
			trueDoge: false,
			compiler: null
		});

		var done = this.async();
		var files = [];
		var fileCount = 0;

		var compiler = getCompiler(options);
		if (!compiler) {
			grunt.log.writeln();
			grunt.log.warn('missin doge!');
			grunt.log.writeln();
			done(false);
			return;
		}

		//flatten list for sanity
		grunt.util._.each(this.files, function (f) {
			grunt.util._.each(f.src, function (filePath) {
				if (!grunt.file.exists(filePath)) {
					grunt.log.writeln(doge.report(['exist', filePath.red, 'good', 'success'], false));
					grunt.log.writeln();
					grunt.log.warn('fantom doge!');
					grunt.log.writeln();
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
			grunt.log.warn('silli doge!');
			grunt.log.writeln();
			done(false);
			return;
		}

		//loop amaze
		var success = 0;
		var failed = 0;

		//TODO implement threaded doge
		grunt.util.async.forEachLimit(files, 1, function (file, callback) {
			compileDoge(compiler, file, options, function (err) {
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
				grunt.log.warn('broke doge');
				grunt.log.writeln();
				done(false);
			}
			else {
				if (success < fileCount || fileCount === 0) {
					grunt.log.writeln(doge.report(['task', (success + ' success').yellow, 'compile', ('failed ' + failed).red, 'error'], false));
					grunt.log.writeln();
					grunt.log.warn('bad doge!');
					grunt.log.writeln();
					done(false);
				}
				else {
					grunt.log.writeln(doge.report(['task', (success + ' success').green, 'compile'], true));
					grunt.log.writeln();
					grunt.log.ok('good doge!');
					done(true);
				}
			}
		});
	});
};
