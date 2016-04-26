React = require 'react'

Footer = React.createClass
  render: ->
    <h1>Footer</h1>
  handleClick: =>
    console.log @
    
module.exports = 
  Footer: Footer