# grunt-dogescript

>  wow [plugin](http://gruntjs.com/) so [dogescript](https://github.com/dogescript/dogescript)

[![Build Status](https://secure.travis-ci.org/dogescript/grunt-dogescript.svg?branch=master)](http://travis-ci.org/dogescript/grunt-dogescript) [![Dependency Status](https://david-dm.org/dogescript/grunt-dogescript.svg)](https://david-dm.org/dogescript/grunt-dogescript) [![NPM version](https://badge.fury.io/js/grunt-dogescript.svg)](http://badge.fury.io/js/grunt-dogescript)

![wow](https://raw.github.com/dogescript/grunt-dogescript/master/media/doge-01.jpg)

     compile dogescript  
                         many codes 
               many syntax
         wow 
                   much beauty
                               amaze builds
                                       doge luv hoge         

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
$ npm install grunt-dogescript --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-dogescript');
```

## The "dogescript" task       

### Default Options

```js
grunt.initConfig({
	dogescript: {
		amaze: {
			options: {
				// optional beautify
				// - default: true
				beauty: true,

				// optional enable true-doge mode
				// - default: false
				trueDoge: true,

				// optional override compiler (handy for bleeding-edge/local editing)
				// - string path, included via require() 
				compiler: path.resolve('../dogescript/index.js')
			},
			src: ['lib/doge.djs']
		}
	}
})
```

## History

* 0.5.2 - moved to dogescript org
* 0.5.1 - added licence note to README
* 0.5.0 - dogescript `v2.3.0`, task rewritten in dogescript
* 0.4.0 - dogescript `v2.2.0`, dropped deprecated dependencies (thanks @shinnn)
* 0.3.0 - dogescript `v2.1.0`, add `trueDoge` option
* 0.2.1 - add `compiler` option
* 0.2.0 - dogescript `v1.4.0`
* 0.1.2 - much improve
* 0.1.0 - doge first release


## Contributing

In lieu of a formal styleguide, take care to maintain the existing doge style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License

Copyright (c) 2014 [Bart van der Schoor](https://github.com/Bartvds)

Licensed under the MIT license.
