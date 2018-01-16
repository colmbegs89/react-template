import React, { Component } from 'react'
import headerLogo1 from '../img/FMF-logo2018.png'
import headerLogo2 from '../img/Homecoming-v2.png'

export class OurBoat extends Component {
 
  render () {
    let headerAlt1 = 'Foyle Maritime Festival 2018'
    let headerAlt2 = 'Join Homecoming July 2018'
    return (
      <div className='OurBoat'>
        <header>
          <div className='container-fluid'>
            <img id='headerLogo' src={headerLogo1} className='col-xs-6 col-sm-6 col-md-5 col-lg-5' alt={headerAlt1} />
            <img id='headerLogo' src={headerLogo2} className='col-xs-6 col-sm-6 col-md-6 col-lg-6' alt={headerAlt2} />
          </div>
          Boat
        </header>
      </div>
    )
  }
}

export default OurBoat