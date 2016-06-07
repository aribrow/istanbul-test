module.exports = function(grunt, data) {
'use strict';

    grunt.loadNpmTasks('grunt-contrib-clean');

    // Cleans the target directory
    grunt.config.set("clean", {
        dist: ['<%= output.dir %>/**']
    });
};
