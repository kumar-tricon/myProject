module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-contrib-clean');
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
        }
    });

    grunt.registerTask('default', ['clean', 'jsdoc']);
};