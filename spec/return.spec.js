require('./spec_helper.js');

var el = jQuery('<input type="text" />').attr('id', 'search');

describe('return', function() {
  it('Should return the value of the element.', function(done) {
    jQuery(el).doneTyping(function(val) {
      expect(val).toEqual('Bryan');
      done();
    });
    jQuery(el).val('Bryan').keydown();
  });
});
