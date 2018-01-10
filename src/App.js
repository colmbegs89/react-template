import React, { Component } from 'react'
import logo from './img/dcsdc.png'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      teststate: false
    }
    this.exampleFunction = this.exampleFunction.bind(this)
  }

  exampleFunction () {
    return true
  }

  render () {
    return (
      <div className='App'>
        <nav id='appNavBar' className='navbar navbar-default App-header navbar-fixed-top'>
          <div>
            <img id='headerLogo' src={logo} className='App-logo' alt='Derry React App' />
            <h2 id='headerText' >Derry React App</h2>
            <p>{this.exampleFunction()}</p>
          </div>
          <hr />
        </nav>
      </div>
    )
  }
}

export default App
