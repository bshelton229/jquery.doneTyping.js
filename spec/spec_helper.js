global.window = require("jsdom")
                .jsdom()
                .createWindow();

global.jQuery = require("jquery");

require('../jquery.doneTyping.js');
