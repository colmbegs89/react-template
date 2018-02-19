import React, { Component } from 'react'
import './App.css'
// import Carousel from './components/Carousel.js'
// import Navigation from './components/Navigation.js'
// Images
// import councillogo from './img/dcsdc.png'
import time from './img/time.png'
import procure from './img/procure.png'
import policies from './img/policies.png'
import delegate from './img/delegate.png'
import help from './img/help.png'
import email from './img/email.png'
import citrix from './img/citrix.png'
import mileage from './img/mileage.png'
import finance from './img/finance.png'
import travel from './img/travel.png'
import mapIcon from './img/map-icon.png'
// import ess from './img/ess.png'
import safety from './img/SafetyIcon.png'
import foldertest from './documents/healthsafety/HS_POLICY_2017.zip'

export class App extends Component {
  showSettings (event) {
    event.preventDefault();
  }
 
  render () {
    
    return (
      <div className='App '>
              {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min.js"></script> */}
        <header>
          {/* <div className='pageHead container-fluid' >
            <img className='col-md-3 councilLogo' src={councillogo} alt="DCSDC"/>
          </div> */}
          {/* <Navigation/> */}
        </header>
      
<div className="container-fluid mainApp">
  <div className="row">
    <div className="col-sm-6">
    <div className="col-sm-6">
    </div>
      <div className="row">
        <div className="col-sm-12">
        <a href="http://dcsdc-ntd-01/ESS/Login.aspx">
          <div className="alert alert-info alert-top" >
            <img className="med-img" alt='content' src={time}/>
            <div className="carousel-caption">

            <h3>Employee Self-Service<br/>Timesheet</h3>
          </div>
          </div>
        </a>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
        <a href="http://citrix.derrycitycouncil.org/Citrix/XenApp/auth/login.aspx">
          <div className="alert alert-info alert-top" >
            <img className="med-img" alt='content' src={citrix}/>
            <div className="carousel-caption">

            <h3>Citrix</h3>
          </div>
          </div>
        </a>
        </div>
        <div className="col-xs-12 col-sm-6">
      <div className="row">
        <div className="col-sm-12 col-xs-6">
        <a href='http://www.theaa.com/driving/mileage-calculator.jsp'>
          <div className="alert alert-success alert-bottom">
            <img alt='content' src={mileage} className='med-img'></img>
            <div className="carousel-caption">
            <h3>PLACEHOLDER	</h3>
          </div>
          </div>
          </a>
        </div>
        <div className="col-sm-12 col-xs-6">
        <a href="http://www.councilintranet.com:8080/Documents/Codebook.xls">
          <div className="alert alert-warning alert-bottom">
            <img alt='content' src={finance} className='med-img'/>
            <div className="carousel-caption">
            <h3>Finance Codebook</h3>
          </div>
          </div>
          </a>
        </div>
      </div>
    </div>
    <div className="col-xs-12 col-sm-6">
      <div className="row">
        <div className="col-sm-12 col-xs-6">
        <a href='/travel'>
          <div className="alert alert-success alert-bottom">
            <img alt='content' src={travel} className='med-img'></img>
            <div className="carousel-caption">
            <h3>Travel & Expenses</h3>
          </div>
          </div>
          </a>
        </div>
        <div className="col-sm-12 col-xs-6">
        <a href="/Sites">
          <div className="alert alert-warning alert-bottom">
            <img alt='content' src={mapIcon} className='med-img'/>
            <div className="carousel-caption">
            <h3>District Sites</h3>
          </div>
          </div>
          </a>
        </div>
      </div>
    </div>
      </div>
    </div>
    <div className="col-xs-12 col-sm-6">
      <div className="row">
        <div className="col-sm-12 col-xs-6">
        <a href={foldertest}>
          <div className="alert alert-success alert-bottom">
            <img alt='content' src={safety} className='med-img'></img>
            <div className="carousel-caption">

            <h3>Health & Safety</h3>
          </div>
          </div>
          </a>
        </div>
        <div className="col-sm-12 col-xs-6">
        <a href="mailto:helpdesk@derrycityandstrabanedistrict.com">
          <div className="alert alert-warning alert-bottom">
            <img alt='content' src={help} className='med-img'/>
            <div className="carousel-caption">
            <h3>IT Help Desk</h3>
          </div>
          </div>
          </a>
        </div>
      </div>
    </div>
    <div className="col-xs-12 col-sm-6">
      <div className="row">
        <div className="col-sm-12 col-xs-6">
        <a href='http://www.councilintranet.com:8080/Procurement.html'>
          <div className="alert alert-success alert-bottom">
            <img alt='content' src={procure} className='med-img'></img>
            <div className="carousel-caption">

            <h3>Procurement</h3>
          </div>
          </div>
          </a>
        </div>
        <div className="col-sm-12 col-xs-6">
        <a href="http://www.councilintranet.com:8080/policies%20-%20Copy.html">
          <div className="alert alert-warning alert-bottom">
            <img alt='content' src={policies} className='med-img'/>
            <div className="carousel-caption">
            <h3>Policies</h3>
          </div>
          </div>
          </a>
        </div>
      </div>
    </div>
    <div className="col-xs-12 col-sm-6">
      <div className="row">
        <div className="col-sm-12 col-xs-6">
        <a href='http://www.councilintranet.com:8080/Documents/Scheme%20of%20Delegation%20version%205%20(3).docx'>
          <div className="alert alert-success alert-bottom">
            <img alt='content' src={delegate} className='med-img'></img>
            <div className="carousel-caption">

            <h3>Scheme of Delegation	</h3>
          </div>
          </div>
          </a>
        </div>
        <div className="col-sm-12 col-xs-6">
        <a href="https://autodiscover.derrystrabane.com/owa ">
          <div className="alert alert-warning alert-bottom">
            <img alt='content' src={email} className='med-img'/>
            <div className="carousel-caption">
            <h3>e-mail</h3>
          </div>
          </div>
          </a>
        </div>
      </div>
    </div>

  </div>
</div>
{/* <hr/> */}
        <div>
        </div>
        {/* <footer>
          test
        </footer> */}

        {/* AIzaSyDG2awf_w-GE85OK97oGGYCoxIso0z8L4s
 */}
      </div>
    )
  }
}

export default App
