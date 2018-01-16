import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import About from './components/About.js'
import OurBoat from './components/OurBoat.js'
import NotFound from './components/NotFound.js'
import Accommodation from './components/Accommodation.js'
import Contact from './components/Contact.js'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  <Router>
      <div>
        <Switch>
            <Route  path="/" exact component={App} />
            <Route path="/about" exact component={About} />
            <Route path="/ourboat" exact component={OurBoat} />
            <Route path="/accommodation" exact component={Accommodation} />
            <Route path="/contact" exact component={Contact} />
            <Route component={NotFound} />
          </ Switch>
      </div>
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()