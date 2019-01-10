module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jsdoc: {
            dist: {
                src: ['root/**/*.js'],
                options: {
                    destination: 'dist/doc'
                }
            }
        },
        clean: {
            build: {
                src: ['dist/*']
            }
        },
        uglify: {
            my_target: {
                files: {
                    'deploy/output.min.js': ['root/webapp/view/p1.view.js', 'root/webapp/view/p2.view.js']
                }
            }
        }
    });

    grunt.registerTask('default', ['clean', 'jsdoc']);
};