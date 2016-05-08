
/*animationEnd = 'webkitAnimationEnd mozAnimationEnd \
MSAnimationEnd oanimationend animationend'
$.fn.extend animateCss: (animationName, callback) ->
  $(@).addClass("animated #{animationName}").one animationEnd, ->
    $(@).removeClass "animated #{animationName}"
    callback()
 */
var content, els, isMobile, isTouch, pushbutton, scrollToTop, sidebar,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

isMobile = /Android|iP(hone|od|ad)|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

isTouch = navigator.maxTouchPoints > 0 || indexOf.call(window, 'ontouchstart') >= 0 || navigator.mxMaxTouchPoints > 0;

console.log("Hello, world");

if (!isMobile) {
  new Hammer(document.body).on("swipedown dragdown", function(ev) {
    return window.location.refresh;
  });
}

scrollToTop = document.querySelector('#scroll-to-top');

scrollToTop.addEventListener('click', function() {
  var interval;
  return interval = setInterval(function() {
    switch (document.body.scrollTop) {
      case 0:
        return clearInterval(interval);
      default:
        return window.scrollBy(0, -40);
    }
  }, 50);
});

window.onscroll = function() {
  if (window.scrollY > 50) {
    return scrollToTop.classList = "";
  } else {
    return scrollToTop.classList = "hidden";
  }
};

content = document.querySelector('.content');

sidebar = document.querySelector('.sidebar');

pushbutton = document.querySelector('#push-sidebar');

els = new Array(pushbutton, sidebar, content);

pushbutton.addEventListener('click', function() {
  var el, i, len, results;
  results = [];
  for (i = 0, len = els.length; i < len; i++) {
    el = els[i];
    results.push(el.classList.toggle('open'));
  }
  return results;
});

content.addEventListener('click', function() {
  var el, i, len, results;
  if (indexOf.call(content.classList, 'open') >= 0) {
    "";
    results = [];
    for (i = 0, len = els.length; i < len; i++) {
      el = els[i];
      results.push(el.classList.toggle('open'));
    }
    return results;
  }
});

if (isTouch) {
  new Hammer(document.body).on("swipeleft swiperight", function(ev) {
    var el, i, j, len, len1, ref, results, results1;
    switch (ev.type) {
      case "swiperight":
        results = [];
        for (i = 0, len = els.length; i < len; i++) {
          el = els[i];
          results.push(el.classList.add("open"));
        }
        return results;
        break;
      case "swipeleft":
        ref = els.reverse();
        results1 = [];
        for (j = 0, len1 = ref.length; j < len1; j++) {
          el = ref[j];
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
