###
slider = document.querySelector('.slider')

new Hammer slider
  .on "panleft panright", (ev) -> switch (ev)
    when "panleft" then sliderPrev
    when "panright" then sliderNext

###