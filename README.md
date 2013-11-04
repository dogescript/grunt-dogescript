# grunt-dogescript

[![Build Status](https://secure.travis-ci.org/Bartvds/grunt-dogescript.png?branch=master)](http://travis-ci.org/Bartvds/grunt-dogescript) [![Dependency Status](https://gemnasium.com/Bartvds/grunt-dogescript.png)](https://gemnasium.com/Bartvds/grunt-dogescript) [![NPM version](https://badge.fury.io/js/grunt-dogescript.png)](http://badge.fury.io/js/grunt-dogescript)

> Wow, much [dogescript](https://github.com/remixz/dogescript), such usefull [plugin](http://gruntjs.com/), amaze

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

     compile dogescript  
                         many codes
            such syntax
       wow 
              much beauty
                           amaze                 

### Default Options

```js
grunt.initConfig({
  dogescript: {
    amaze {
      options: {
         beauty:true,
      },
      src: ['lib/doge.djs']
    }
  }
})
```

## History

* 0.1.0 - First doge, release wow


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
