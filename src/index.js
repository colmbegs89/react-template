import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import GettingHere from './components/about/GettingHere.js'
import GettingAround from './components/about/GettingAround.js'
import Headline from './components/whatsOn/Headline.js'
import Artists from './components/whatsOn/Artists.js'
import Glance from './components/whatsOn/Glance.js'
import Education from './components/whatsOn/Education.js'
import Trail from './components/jazzTrail/Trail.js'
import Evolved from './components/yourVisit/Evolved.js'
import Gallery from './components/yourVisit/Gallery.js'
import Nostalgia from './components/yourVisit/Nostalgia.js'
import Started from './components/yourVisit/Started.js'
import NotFound from './components/NotFound.js'
// import Generic from './components/Generic.js'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//to add an additional route simply copy line 21 for a standard page
//or line 22 if you wish to use the generic and uncomment line 8//TODO still in progress

ReactDOM.render(
  <Router>
      <div>
        <Switch>
            <Route  path="/" exact component={App} />
            <Route  path="/headline" exact component={Headline} />
            <Route  path="/artists" exact component={Artists} />
            <Route  path="/glance" exact component={Glance} />
            <Route  path="/education" exact component={Education} />
            <Route  path="/trail" exact component={Trail} />
            <Route  path="/gettinghere" exact component={GettingHere} />
            <Route  path="/gettingaround" exact component={GettingAround} />
            <Route  path="/started" exact component={Started} />
            <Route  path="/evolved" exact component={Evolved} />
            <Route  path="/gallery" exact component={Gallery} />
            <Route  path="/nostalgia" exact component={Nostalgia} />
            <Route component={NotFound} />
          </ Switch>
      </div>
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()