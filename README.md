# grunt-dogescript

>  wow [plugin](http://gruntjs.com/) so [dogescript](https://github.com/remixz/dogescript)

[![Build Status](https://secure.travis-ci.org/Bartvds/grunt-dogescript.png?branch=master)](http://travis-ci.org/Bartvds/grunt-dogescript) [![Dependency Status](https://gemnasium.com/Bartvds/grunt-dogescript.png)](https://gemnasium.com/Bartvds/grunt-dogescript) [![NPM version](https://badge.fury.io/js/grunt-dogescript.png)](http://badge.fury.io/js/grunt-dogescript)

![wow](https://raw.github.com/Bartvds/grunt-dogescript/master/media/doge-01.jpg)

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

* 0.4.0 - dogescript `v2.2.0`, dropped deprecated dependencies (thanks @shinnn)
* 0.3.0 - dogescript `v2.1.0`, add `trueDoge` option
* 0.2.1 - add `compiler` option
* 0.2.0 - dogescript `v1.4.0`
* 0.1.2 - much improve
* 0.1.0 - doge first release


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/Bartvds/grunt-dogescript/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

