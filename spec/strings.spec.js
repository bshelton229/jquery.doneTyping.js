require('./spec_helper.js');

var el = jQuery('<input type="text" />').attr('id', 'search').doneTyping(),
    done_typing = el.data('doneTyping');

describe('string functions', function() {
  it('Should trim a string', function() {
    expect( done_typing.trim('  bryan  ') ).toEqual( 'bryan' );
  });
});
