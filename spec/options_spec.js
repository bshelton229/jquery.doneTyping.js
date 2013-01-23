require('./spec_helper.js');

describe('options', function() {
  it('Should save all options', function() {
    var el = jQuery('<input type="text" />').doneTyping({
      delay: 300,
      test: 'other'
    });
    expect( el.data('doneTyping').options.delay ).toEqual(300);
    expect( el.data('doneTyping').options.test ).toEqual('other');
  });

  it('Should pass options back to the callback', function(done) {
    var el = jQuery('<input type="text" />').doneTyping({
      delay:0,
      additional: 'value',
      success: function(val, opts) {
        expect( opts.additional ).toEqual('value');
        done();
      }
    });
    el.trigger('keydown');
  });
});
