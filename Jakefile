var fs = require('fs'),
    ugly = require("uglify-js");

desc('Minify the library');
task('build', function(p) {
  var minified = ugly.minify('./jquery.doneTyping.js');
  fs.writeFile('./jquery.doneTyping.min.js', minified.code);
});
