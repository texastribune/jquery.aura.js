# jquery.aura.js

Allows you to trigger an event when the mouse gets close.

## Usage

Trigger a callback when the mouse gets within a 40 pixel box around `<div id="cake">`:

    $('#cake').aura(40, function () { alert('Remember your diet!'); });


## Prior art

* https://github.com/e-sites/perimeter.js

Very similar. Useful if you need repeated detection, it listens to the
'mousemove' event instead of 'mouseover'.
