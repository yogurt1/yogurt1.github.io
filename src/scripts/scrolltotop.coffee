scrollToTop = document.querySelector '#scroll-to-top'

scrollToTop.addEventListener 'click', -> interval = setInterval ->
  switch document.body.scrollTop
    when 0
      clearInterval interval
    else
      window.scrollBy 0, -40
, 1000 / 60

window.addEventListener 'scroll', -> scrollToTop.classList =
  if window.pageYOffset > 50 then "" else "hidden"