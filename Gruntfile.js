// Time how long tasks take. Can help when optimizing build times
var timer = require("grunt-timer"),
    xtend = require("xtend");

module.exports = function(grunt) {
    var globalconfig,
        deploymentAttrs;

    // add "path" property (with environment specific paths) into properties.config object

    /**
     * generateDeploymentPaths
     *
     * @param {object} properties for build
     * @param {string} environment name
     * @returns {object} properties for enviroment
     */
    function generateDeploymentPaths(properties, environment) {
        var output = properties.configs,
            selectedbuild = {
                path: properties.builds[environment]
            };

        // include "path" properties (for environment) in config properties
        return xtend(output, selectedbuild);
    }

    // Timer init to show execute time of grunt task
    timer.init(grunt);

    // get properties from json file
    globalconfig = grunt.file.readJSON("properties.json");

    // parse environment option (env/default)
    if ((!grunt.option("env")) || (!globalconfig.builds[grunt.option("env")])) {
        grunt.option("env", "default");

        console.log("No valid environment found, using " + grunt.option("env") + " instead.");
    }

    console.log("Building for environment: " + grunt.option("env"));

    // init configuration with properties from json file and environment specific paths
    deploymentAttrs = generateDeploymentPaths(globalconfig, grunt.option("env"));
    grunt.initConfig(deploymentAttrs);

    // Load grunt config from files in grunt directory
    grunt.loadTasks("build/grunt/config");


    grunt.registerTask("test", [

        // clean target
        "clean:dist",

        // copy test files in to target
        "copy:test",

        // replace URL for UI5 resources
        "string-replace:test",

        // init "connect"
        "connect",

        // run tests
        "qunit"
    ]);
};
