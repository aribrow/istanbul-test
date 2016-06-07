module.exports = function(grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-copy');

    // Copies files into target (only for appExample)
    grunt.config.set("copy", {


        // copy "app" and "test" for qunit testing
        test: {
            files: [
                {
                    expand: true,
                    cwd: "./",
                    src: [
                        "<%= main.srcRoot %>/**",
                        "<%= test.src %>/**"
                    ],
                    dest: "<%= output.dir %>"
                }
            ]
        }

    });
};
