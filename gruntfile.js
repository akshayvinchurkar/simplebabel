module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt) // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015']
      },
      dist: {
        files: {
          'dist/app.js': 'app.js'
        }
      }
    },
    watcher: {
      scripts: {
        files: ['app.js'],
        tasks: ["babel"],
        options: {
          spawn: false,
        },
      },
    }
  });

  grunt.loadNpmTasks("grunt-watcher");
  grunt.registerTask('default', ['babel', 'watcher']);
};
