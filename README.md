# jquery.aura.js

Allows you to trigger an event when the mouse gets close.

## Usage

Trigger a callback when the mouse gets within a 40 pixel box around `<div id="cake">`:

    $('#cake').aura(40, function () { alert('Remember your diet!'); });

You can also specify the box as if you were defining css padding (pixels only):

    $('#cookies').aura('40px 30px 20px 10px', function () { alert("I'll jsut have one"); });

You can also specify the callback promises[promise] style:

    $('#pie').aura(15).then(function () { alert('3.14159265359'); });

  [promise]: http://api.jquery.com/deferred.promise/

### [Demo][demo]

  [demo]: http://texastribune.github.io/jquery.aura.js/demo/

## Prior art

* https://github.com/e-sites/perimeter.js

Very similar. Useful if you need repeated detection, it listens to the
'mousemove' event instead of 'mouseover'.
