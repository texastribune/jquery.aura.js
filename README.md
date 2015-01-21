jquery.aura.js
==============

Allows you to trigger code when the mouse gets near an element.

### Why

We use it to start loading expensive resources when we think a user is about to
ask for them. This way, we trade always taking a bit hit up front with always
taking a small hit for this library to sometimes taking a big hit later without
adding delays. The problem with using mouse events directly with the element is
that by the time a user's mouse is over a button, it's too late to start
preloading that button's interaction.

### How

jquery.aura.js works by injecting invisible helper elements on top of your
page, and detecting when the mouse moves over it. If you're watching for mouse
events, these helper elements shouldn't interfere because they remove
themselves from the DOM the moment they get activated. If this script does not
work for you, there are alternatives, see the [Prior Art] section.


Usage
-----

Trigger a callback when the mouse gets within a 40 pixel box around `<div id="cake"/>`:

    $('#cake').aura(40, function () { alert('Remember your diet!'); });

You can also specify the box as if you were defining css padding (pixels only):

    $('#cookies').aura('40px 30px 20px 10px', function () { alert("I'll just have one"); });

You can also specify the callback [promise] style:

    $('#pie').aura(15).then(function () { alert('3.14159265359'); });

  [promise]: http://api.jquery.com/deferred.promise/

[Demo][demo]
------------

  [demo]: http://texastribune.github.io/jquery.aura.js/demo/


For Developers
--------------

### Getting started

```bash
# install requirements
npm install


# do a build
grunt
```


Prior art
---------

* https://github.com/e-sites/perimeter.js

Very similar. Useful if you need repeated detection, it listens to the
'mousemove' event instead of 'mouseover'.
