isMobile = /Android|iP(hone|od|ad)|BlackBerry|IEMobile|Opera Mini/i
  .test navigator.userAgent
  
isTouch = navigator.maxTouchPoints > 0\
  or 'ontouchstart' in window \
  or navigator.mxMaxTouchPoints > 0