scrollToTop = document.querySelector '#scroll-to-top'

scrollToTop.addEventListener 'click', -> interval = setInterval ->
  switch document.body.scrollTop
    when 0
      clearInterval interval
    else
      window.scrollBy 0, -40
, 50

window.onscroll = () ->
  if window.scrollY > 50
    scrollToTop.classList = ""
  else
    scrollToTop.classList = "hidden"