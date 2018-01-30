import React, { Component } from 'react'
export class Navigation extends Component {

  render () {

    return (
      // <div className='container'>

      <nav className="navbar navbar-default top-bar navbar-fixed-top" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span> 
            </button>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/">Home</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Whats On <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a className='navText' href='/headline' >The Headline</a></li>
                  <li className=' divider'></li>
                  <li><a className='navText' href='/artists' >The Artists</a></li>
                  <li className=' divider'></li>
                  <li><a className='navText' href='/glance' >At a Glance</a></li>
                  <li className=' divider'></li>
                  <li><a className='navText' href='/education' >Education</a></li>
                </ul>
              </li>
              <li><a className='navText' href='/trail' >Jazz Trail</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a className='navText' href='/gettinghere' >Getting Here</a></li>
                  <li className=' divider'></li>
                  <li><a className='navText' href='/gettingaround' >Getting Around</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Your Visit <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a className='navText' href='/started' >How it started</a></li>
                  <li className=' divider'></li>
                  <li><a className='navText' href='/evolved' >How it's evolved</a></li>
                  <li className=' divider'></li>
                  <li><a className='navText' href='/gallery' >Gallery</a></li>
                  <li className=' divider'></li>
                  <li><a className='navText' href='/nostalgia' >Nostalgia</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        // </div>

//         <nav className="navbar navbar-inverse">
//   <div className="container-fluid">
//     <div className="navbar-header">
//       <a class="navbar-brand" href="#">WebSiteName</a>
//     </div>
//     <ul className="nav navbar-nav">
//       <li className="active"><a href="#">Home</a></li>
//       <li className="dropdown">
//         <a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1
//         <span className="caret"></span></a>
//         <ul className="dropdown-menu">
//           <li><a href="#">Page 1-1</a></li>
//           <li><a href="#">Page 1-2</a></li>
//           <li><a href="#">Page 1-3</a></li>
//         </ul>
//       </li>
//       <li><a href="#">Page 2</a></li>
//       <li><a href="#">Page 3</a></li>
//     </ul>
//   </div>
// </nav>
    )
  }
}

export default Navigation