Enter file contents here

//  Fade Code-------------

//    <script type="text/javascript">

var fadeOpacity = new Array();
var fadeTimer = new Array();
var fadeInterval = 100;  // milliseconds

function fade(o, d) {

  // o - Object to fade in or out.
  // d - Display, true =  fade in, false = fade out

  var obj = document.getElementById(o);

  if ((fadeTimer[o]) || (d && obj.style.display != 'block') || (!d && obj.style.display == 'block')) {

    if (fadeTimer[o])
      clearInterval(fadeTimer[o]);
    else
      if (d) fadeOpacity[o] = 0;
    else fadeOpacity[o] = 9;

    obj.style.opacity = "." + fadeOpacity[o].toString();
    obj.style.filter = "alpha(opacity=" + fadeOpacity[o].toString() + "0)";

    if (d) {
      obj.style.display = 'block';
      fadeTimer[o] = setInterval('fadeAnimation("' + o + '",1);', fadeInterval);
    }
    else
      fadeTimer[o] = setInterval('fadeAnimation("' + o + '",-1);', fadeInterval);
  }
}

function fadeAnimation(o, i) {

  // o - o - Object to fade in or out.
  // i - increment, 1 = Fade In

  var obj = document.getElementById(o);
  fadeOpacity[o] += i;
  obj.style.opacity = "." + fadeOpacity[o].toString();
  obj.style.filter = "alpha(opacity=" + fadeOpacity[o].toString() + "0)";

  if ((fadeOpacity[o] == '9') | (fadeOpacity[o] == '0')) {
    if (fadeOpacity[o] == '0')
      obj.style.display = 'none';
    else {
      obj.style.opacity = "1";
      obj.style.filter = "alpha(opacity=100)";
    }

    clearInterval(fadeTimer[o]);
    delete (fadeTimer[o]);
    delete (fadeTimer[o]);
    delete (fadeOpacity[o]);

  }
}


//Grayout Code----------

function addEvent(obj, evt, fnc) {
  if (obj.addEventListener)
    obj.addEventListener(evt, fnc, false);
  else if (obj.attachEvent)
    obj.attachEvent('on' + evt, fnc);
  else
    return false;
  return true;
}

function removeEvent(obj, evt, fnc) {
  if (obj.removeEventListener)
    obj.removeEventListener(evt, fnc, false);
  else if (obj.detachEvent)
    obj.detachEvent('on' + evt, fnc);
  else
    return false;
  return true;
}

//----------

function appendElement(node, tag, id, htm) {
  var ne = document.createElement(tag);
  if (id) ne.id = id;
  if (htm) ne.innerHTML = htm;
  node.appendChild(ne);
}

//----------

function showPopup(p) {
  greyout(true);
  //        document.getElementById(p).style.display = 'block';
  //        
}

function hidePopup(p) {
  greyout(false);
  document.getElementById(p).style.display = 'none';
}

//----------

function greyout(d, z) {
  var obj = document.getElementById('greyout');

  if (!obj) {
    appendElement(document.body, 'div', 'greyout');
    obj = document.getElementById('greyout');
    obj.style.position = 'absolute';
    obj.style.top = '0px';
    obj.style.left = '0px';
    obj.style.background = '#111';
    obj.style.opacity = '.3';
    obj.style.filter = 'alpha(opacity=30)';
  }
  if (d) {
    var ch = document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
    var cw = document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth;
    var sh = document.documentElement.scrollHeight ? document.documentElement.scrollHeight : document.body.scrollHeight;
    if (document.body.scrollHeight) sh = Math.max(sh, document.body.scrollHeight)
    var sw = document.documentElement.scrollWidth ? document.documentElement.scrollWidth : document.body.scrollWidth;
    if (document.body.scrollWidth) sh = Math.max(sh, document.body.scrollWidth)
    var wh = window.innerHeight ? window.innerHeight : document.body.offsetHeight;
    if (!z) { z = 50 }
    obj.style.zIndex = z;
    obj.style.height = Math.max(wh, Math.max(sh, ch)) + 'px';
    obj.style.width = Math.max(sw, cw) + 'px';
    obj.style.display = 'block';
    addEvent(window, 'resize', greyoutResize);
  }
  else {
    obj.style.display = 'none';
    removeEvent(window, 'resize', greyoutResize);
  }
}

function greyoutResize() {
  var ch = document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
  var cw = document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth;
  var sh = document.documentElement.scrollHeight ? document.documentElement.scrollHeight : document.body.scrollHeight;
  if (document.body.scrollHeight) sh = Math.max(sh, document.body.scrollHeight)
  var sw = document.documentElement.scrollWidth ? document.documentElement.scrollWidth : document.body.scrollWidth;
        if(document.body.scrollWidth) sh = Math.max(sh,document.body.scrollWidth)
        var wh = window.innerHeight ? window.innerHeight : document.body.offsetHeight;
        var obj = document.getElementById('greyout');
        obj.style.height = ch+'px';
        obj.style.width  = cw+'px';
        obj.style.height = Math.max(wh,Math.max(sh,ch))+'px';
        obj.style.width  = Math.max(sw,cw)+'px';
      }

      //----------

//    </script>
