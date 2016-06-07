"use strict";
module.exports = function(grunt) {
    grunt.loadNpmTasks("grunt-qunit-istanbul");
    //grunt.loadNpmTasks("grunt-contrib-qunit");

    grunt.config.set("qunit", {
        options: {
            "--web-security": "no",
            coverage: {
                disposeCollector: true,
                src: ["app/mvc/controller/*.js"],
                instrumentedFiles: "<%= test.base %>/test/specs/unit/temp/",
                lcovReport: "<%= test.base %>/test/specs/unit/qunit-istanbul/report",
                coberturaReport: "<%= test.base %>/test/specs/unit/qunit-istanbul/",
                baseUrl: "./"
            }
        },

        all: {
            options: {
                urls: [

                    // controllers
                    "http://<%= test.host %>:<%= test.port %>/test/specs/unit/controllers/BaseController.qunit.html"

                ],
                console: false,
                "--web-security": "no"
            }
        }
    });
};
