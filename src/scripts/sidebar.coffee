content = document.querySelector '.content'
sidebar =  document.querySelector '.sidebar'
pushbutton = document.querySelector '#push-sidebar'
els = new Array pushbutton, sidebar, content
#elsRev = els.reverse()

# DOM Event Handler
pushbutton.addEventListener 'click', ->
  el.classList.toggle 'open' for el in els

content.addEventListener 'click', ->
  if 'open' in content.classList
    ""
    el.classList.toggle 'open' for el in els
#      el.classList.toggle 'open'

# HammerJS Touch Event Handler
if isTouch
  new Hammer document.body
    .on "swipeleft swiperight", (ev) ->
      switch ev.type
        when "swiperight"
          el.classList.add "open" for el in els
        when "swipeleft"
          el.classList.remove "open" for el in els.reverse()