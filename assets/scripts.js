
/*animationEnd = 'webkitAnimationEnd mozAnimationEnd \
MSAnimationEnd oanimationend animationend'
$.fn.extend animateCss: (animationName, callback) ->
  $(@).addClass("animated #{animationName}").one animationEnd, ->
    $(@).removeClass "animated #{animationName}"
    callback()
 */
var content, els, elsRev, isMobile, isTouch, pushbutton, sidebar,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

isMobile = /Android|iP(hone|od|ad)|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

isTouch = navigator.maxTouchPoints > 0 || indexOf.call(window, 'ontouchstart') >= 0 || navigator.mxMaxTouchPoints > 0;

console.log("Hello, world");

if (!isMobile) {
  new Hammer(document.body).on("swipedown dragdown", function(ev) {
    return window.location.refresh;
  });
}

window.onscroll = function() {
  var scrollTopTop;
  scrollTopTop = document.querySelector('#scrolltoptop');
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    return scrollTopTop.classList = "";
  } else {
    return scrollTopTop.classList = "hidden";
  }
};

sidebar = document.querySelector('.content');

content = document.querySelector('.sidebar');

pushbutton = document.querySelector('#push-sidebar');

els = new Array(pushbutton, sidebar, content);

elsRev = els.reverse();

pushbutton.addEventListener('click', function() {
  var el, i, len, results;
  results = [];
  for (i = 0, len = els.length; i < len; i++) {
    el = els[i];
    results.push(el.classList.toggle('open'));
  }
  return results;
});


/*content.addEventListener 'click', ->
  if 'open' in content.classList
    el.classList.toggle 'open' for el in els
 */

if (isTouch) {
  new Hammer(document.body).on("panleft panright", function(ev) {
    var el, i, j, len, len1, results, results1;
    switch (ev.type) {
      case "panright":
        results = [];
        for (i = 0, len = els.length; i < len; i++) {
          el = els[i];
          results.push(el.classList.add("open"));
        }
        return results;
        break;
      case "panleft":
        results1 = [];
        for (j = 0, len1 = elsRev.length; j < len1; j++) {
          el = elsRev[j];
          results1.push(el.classList.remove("open"));
        }
        return results1;
    }
  });
}


/*
slider = document.querySelector('.slider')

new Hammer slider
  .on "panleft panright", (ev) -> switch (ev)
    when "panleft" then sliderPrev
    when "panright" then sliderNext
 */
