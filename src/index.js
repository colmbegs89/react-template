import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import Sites from './components/Sites.js'
import Travel from './components/Travel.js'

import NotFound from './components/NotFound.js'
// import Generic from './components/Generic.js'
// import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { unregister } from './registerServiceWorker';
//to add an additional route simply copy line 21 for a standard page
//or line 22 if you wish to use the generic and uncomment line 8//TODO still in progress

ReactDOM.render(
  <Router>
      <div>
        <Switch>
            <Route  path="/" exact component={App} />
            <Route  path="/sites" exact component={Sites} />
            <Route  path="/travel" exact component={Travel} />
            <Route component={NotFound} />
          </ Switch>
      </div>
  </Router>,
  document.getElementById('root')
)
// registerServiceWorker()
unregister()