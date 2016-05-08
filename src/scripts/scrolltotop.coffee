window.onscroll = () ->
  scrollTopTop = document.querySelector('#scrolltoptop')
  if document.body.scrollTop > 50 \
    or document.documentElement.scrollTop > 50
      scrollTopTop.classList = ""
  else
    scrollTopTop.classList = "hidden"