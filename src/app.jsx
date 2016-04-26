import React from 'react'
import { render }  from 'react-dom'

//import { Header, Footer } from './components/'
import { Header } from './components/header'
import { Footer } from './components/footer'

let App = React.createClass({
  render: () => { 
    return (
      <div>
      <Header />
      <Footer />
      <h1>Test</h1>
      </div>
    )
  }})

render(<App />, 
  document.querySelector("#app"))

//#console.log <Header />
//#console.log Footer
console.log(App)
console.log(render)

module.exports = {
  App: App
}