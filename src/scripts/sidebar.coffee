sidebar = document.querySelector '.content'
content =  document.querySelector '.sidebar'
pushbutton = document.querySelector '#push-sidebar'
els = new Array pushbutton, sidebar, content
elsRev = els.reverse()

# DOM Event Handler
pushbutton.addEventListener 'click', ->
  el.classList.toggle 'open' for el in els

###content.addEventListener 'click', ->
  if 'open' in content.classList
    el.classList.toggle 'open' for el in els###

# HammerJS Touch Event Handler
if isTouch
  new Hammer document.body
    .on "panleft panright", (ev) ->
      switch ev.type
        when "panright"
          el.classList.add "open" for el in els
        when "panleft"
          el.classList.remove "open" for el in elsRev