React = require 'react'
ReactDOM = require 'react-dom'
Header = require './header.cjsx'
Footer = require './footer.cjsx'

App = React.createClass
  render: ->
    <div>
    <Header />
    <Footer />
    </div>

ReactDOM.render <App />, 
  document.querySelector "#app"