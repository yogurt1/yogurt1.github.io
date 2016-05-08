###animationEnd = 'webkitAnimationEnd mozAnimationEnd \
MSAnimationEnd oanimationend animationend'
$.fn.extend animateCss: (animationName, callback) ->
  $(@).addClass("animated #{animationName}").one animationEnd, ->
    $(@).removeClass "animated #{animationName}"
    callback()###
# jQuery SUCKS
