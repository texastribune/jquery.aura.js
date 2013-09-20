(function ($) {
  "use strict";

  // return the first argument that isn't `undefined`
  var firstdefined = function () {
    for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] !== 'undefined') {
        break;
      }
    }
    return arguments[i];
  };


  // get the top/right/bottom/left distances css style(assumes pixels)
  var cssShorthandDistances = function(distance) {
    var out;
    if (typeof distance === "number") {
      // optimize for the most common case
      out = {
        top: distance,
        right: distance,
        bottom: distance,
        left: distance
      };
    } else {
      var bits = distance.split(' ');
      out = {
          top: parseInt(bits[0], 10),
          right: parseInt(firstdefined(bits[1], bits[0]), 10),
          bottom: parseInt(firstdefined(bits[2], bits[0]), 10),
          left: parseInt(firstdefined(bits[3], bits[1], bits[0]), 10)
      };
    }
    // XXXLOL
    out.toString = function() {
      return this.top + 'px ' + this.right + 'px ' + this.bottom + 'px ' + this.left + 'px';
    };
    return out;
  };


  var NAME = 'aura';

  // add an aura to an element. if the mouse enters this aura, trigger a callback
  $.fn.aura = function(distance, callback) {
    if (!this.length) {
      return this;
    }
    var cssPxDistance = cssShorthandDistances(distance);
    var $helper = $('<div class="ui-aura-helper" style="box-sizing: content-box; -moz-box-sizing: content-box; -webkit-box-sizing: content-box; position: absolute; z-index: 999"/>')
      .css('padding', "" + cssPxDistance)
      .appendTo(document.body); // XXX works for now
    // FIXME only works for one element
    var position = this.position();
    $helper
      .css({
        height: this.outerHeight(),
        left: position.left - cssPxDistance.left,
        top: position.top - cssPxDistance.top,
        width: this.outerWidth()
      });
    if (callback) {
      $helper
        .on('mouseover.' + NAME, function() {
          callback.call(undefined);  // what should 'this' be?
          $helper.remove();
        });
      return this;
    } else {
      var dfd = new $.Deferred();
      $helper
        .on('mouseover.' + NAME, function() {
          dfd.resolve(NAME);
          $helper.remove();
        });
      return dfd.promise();
    }
  };

})(window.jQuery);
