import React, { Component } from 'react'
// import Carousel from './components/Carousel.js'
// import Navigation from './components/Navigation.js'
// Images
import mileage from '../img/mileage.png'
import travel from '../img/travel.png'

export class App extends Component {
  showSettings (event) {
    event.preventDefault();
  }
 
  render () {
    
    return (
<div className='App '>
        <header>
          {/* <div className='pageHead container-fluid' >
            <img className='col-md-3 councilLogo' src={councillogo} alt="DCSDC"/>
          </div> */}
          {/* <Navigation/> */}
        </header>
      
<div className="container-fluid mainApp">
  <div className="row">
    <div className="col-sm-6">
      <div className="row">
        <div className="col-sm-12">
        <a href="http://dcsdc-ntd-01/ESS/Login.aspx">
          <div className="alert alert-info alert-top" >
            <img className="med-img" alt="Mileage Timesheet " src={travel}/>
            <div className="carousel-caption">

            <h3>Mileage<br/>Timesheet</h3>
          </div>
          </div>
        </a>
        </div>
      </div>
      </div>
      <div className="col-sm-6">

      <div className="row">
        <div className="col-sm-12">
        <a href='http://www.councilintranet.com:8080/Claimforms/travel%20claim%20form.docx'>
          <div className="alert alert-success alert-bottom">
            <img src={travel} alt='Travel & Subsistence Form ' className='med-img'></img>
            <div className="carousel-caption">
            <h3>Travel & Subsistence Form</h3>
          </div>
          </div>
          </a>
        </div>
        <div className="col-xs-12 col-sm-6">
      <div className="row">
        <div className="col-sm-12 col-xs-6">
        <a href='http://www.theaa.com/driving/mileage-calculator.jsp'>
          <div className="alert alert-success alert-bottom">
            <img src={mileage} alt='Mileage Calculator ' className='med-img'></img>
            <div className="carousel-caption">
            <h3>Mileage Calculator	</h3>
          </div>
          </div>
          </a>
        </div>
      </div>
    </div>
    </div>
      </div>
    </div>
  </div>
</div>
    )
  }
}

export default App
