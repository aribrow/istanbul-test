"use strict";
module.exports = function(grunt /* ,data */) {

    grunt.loadNpmTasks("grunt-string-replace");

    grunt.config.set("string-replace", {
        // replace ui5 reference for automated unit testing
        test: {
            files: {
                "<%= output.dir %>/test/specs/unit/": "<%= test.dir %>/specs/unit/**/*.html"
            },
            options: {
                replacements: [
                    {
                        pattern: /\/sapui5\/resources\//gi,
                        replacement: "<%= path.test.ui5ResourcesDir %>"
                    }
                ]
            }
        }
    });
};
