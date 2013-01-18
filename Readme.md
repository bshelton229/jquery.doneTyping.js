## jquery DoneTyping

A very simple jQuery plugin to fire a delayed callback when a user stops "typing"
in an element. The exception keys still need some work.

```javascript
$("#search").doneTyping(function(val, opts) {
  // Do something clever with the value
});

$("#search").doneTyping({
  delay: 600, // miliseconds (default is 500)
  success: function(val, opts) {
    // Do something
  }
});
```
