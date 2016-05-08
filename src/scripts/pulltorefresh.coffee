#if 'android' in navigator.userAgent
#  #new Hammer document.body
#  alert 'Android'
unless isMobile
  new Hammer document.body
    .on "swipedown dragdown", (ev) ->
      window.location.refresh