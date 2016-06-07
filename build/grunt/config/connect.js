"use strict";
module.exports = function(grunt) {
    grunt.loadNpmTasks("grunt-contrib-connect");

    grunt.config.set("connect", {
        server: {
            options: {
                port: "<%= test.port %>",
                base: "<%= test.base %>",
                //keepalive: true,
                hostname: "<%= test.host %>"
            }
        }

    });
};
