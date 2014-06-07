quiet
    grunt-dogescript
    https://github.com/Bartvds/grunt-dogescript

    Copyright (c) 2013 Bart van der Schoor
    Licensed under the MIT license.
loud

trained

so require-doge as rd
so ../lib/doge.djs as doge
so dogescript
so async

such exported much grunt

    such error much messages
        rly messages instanceof Array
            messages is plz messages.join with ' '
        wow
        plz grunt.log.error with messages
    wow

    such warn much messages
        rly messages instanceof Array
            messages is plz messages.join with ' '
        wow
        plz grunt.log.warn with messages
    wow

    such line much messages
        rly messages instanceof Array
            very string is plz messages.join with ' '
            plz grunt.log.writeln with string
        but rly typeof messages is 'string'
            plz grunt.log.writeln with messages
        but
            plz grunt.log.writeln
        wow
    wow

    such report much messages success
        very message is plz doge.report with messages success
        plz line with message
    wow

    such getCompiler much options
        so dogescript
        rly options.compiler
            rly typeof options.compiler is 'function'
                dogescript is options.compiler
            but rly typeof options.compiler is 'string'
                very src is options.compiler
                try {
                    dogescript is plz require with src
                }
                catch (e) {
                    plz line
                    plz error with 'plz compilers', src
                }
            wow
        wow
    wow dogescript

    such compileDoge much compiler file options callback
        very src is plz grunt.file.read with file.src
        src is plz src.replace with /(?:\r\n)|\r/g '\n'

        very res is plz compiler with src options.beauty options.trueDoge
        rly res
            plz grunt.file.write with file.dest, res
            plz callback
        but
            very error is new Error with 'much error compile'
            plz callback with error
        wow
    wow


    such task
        very options is {}
        options.beauty is true
        options.trueDoge is false
        options.compiler is null

        options is plz this.options with options

        very done is plz this.async
        very files is []
        very fileCount is 0

        very compiler is plz getCompiler with options
        rly !compiler
            plz line
            plz warn with 'missin doge!'
            plz line
            plz done with false
            return
        wow

        shh flatten list for sanity
        plz this.files.forEach with much f
            plz f.src.forEach with much filePath
                very exists is plz grunt.file.exists with filePath
                rly !exists
                    very res is plz doge.report with ['exist', filePath.red, 'good', 'success'], false
                    plz line with res
                    plz line
                    plz warn with 'fantom doge!'
                    plz line
                    return false
                wow
                fileCount++;
                very dest is f.dest;
                rly !dest
                    dest is plz filePath.replace with /.djs$/, '.js'
                wow

                very file is {}
                file.src = filePath
                file.dest = dest
                file.options = options

                plz files.push with file
            });
        });

        shh sad no doge
        rly fileCount is 0
            plz report with ['input', 'source', 'files', 'empty', 'work', 'path', 'compile', 'empty'], false
            plz line
            plz warn with 'silli doge!'
            plz line
            plz done with false
            return;
        wow

        shh loop amaze
        very success is 0
        very failed is 0

        such end much err
            rly err
                plz report with ['task', 'dogescript', 'compile', 'error'], false
                plz line
                plz warn with 'broke doge'
                plz line
                plz done with false
            but rly success < fileCount || fileCount === 0
                plz report with ['task', [success, ' success'].yellow, 'compile', ('failed ' + failed).red, 'error'], false
                plz line
                plz warn with 'bad doge!'
                plz line
                plz done with false
            but
                plz report with ['task', [success, ' success'].green, 'compile'], true
                plz line
                plz grunt.log.ok 'good doge!'
                plz done with true
            wow
        wow

        shh TODO implement threaded doge
        plz async.eachLimit with files, 1, much file callback
            plz compileDoge with compiler, file, options, much err
                rly err
                    plz warn with err
                    plz report with ['input', file.src.red, 'compile', 'error'], false
                    failed++;
                but
                    plz report with ['input', file.src.green, 'compile', 'build', file.dest.cyan, 'code'], true
                    success++
                wow
                plz line
                plz callback
            wow&
        wow
         ,
        end
        )
    wow

    plz grunt.registerMultiTask with 'dogescript', 'doge compile codes', task
wow

module.exports is exported
