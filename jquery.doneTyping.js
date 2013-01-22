!function($){

  var DoneTyping = function (element, options) {
    if ( typeof(options) == 'function' ) options = { success: options };
    this.element = element;
    this.$element = $(element);
    this.options = $.extend({}, $.fn.doneTyping.defaults, options);
    this.bindEvents();
  }

  DoneTyping.prototype = {

    // constructor: DoneTyping

  bindEvents: function () {
      this.$element
        .on('blur',     $.proxy(this.blur, this))
        .on('keydown', $.proxy(this.keydown, this));
    }

  , keydown: function (e) {
      switch(e.keyCode) {
        case 37:  // Left arrow
        case 38:  // Up arrow
        case 39:  // Right arrow
        case 40:  // Down arrow
        case 17:  // Ctrl
        case 18:  // Alt
        case 91:  // Command
        case 9:   // Tab
          break;
        case 13:  // Enter
          break;
        case 27:  // Escape
          break;
        default:
          this.success();
      }
    }

  , success: function() {
    var self = this;
    if ( this.defer ) clearTimeout(this.defer);
    this.defer = setTimeout(function() {
      if ( self.options.success ) self.options.success.call(self.element, self.$element.val(), self.options);
    }, this.options.delay);
  }

  , blur: function (e) {
      if ( this.options.blur ) this.options.blur.call(this.element, e, this.options);
    }

  , trim: function(s) {
      return s.replace(/^\s+/, '').replace(/\s+$/, '');
    }
  }

  // jQuery plugin definition
  $.fn.doneTyping = function(opt) {
    return this.each(function() {
      var $this = $(this),
          data = $this.data('doneTyping'),
          options = opt;
      if ( !data ) $this.data('doneTyping', (data = new DoneTyping(this, options)));
    });
  }

  // Default options
  $.fn.doneTyping.defaults = {
    delay: 500
  }

}(window.jQuery);
