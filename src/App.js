import React, { Component } from 'react'
import logo from './img/dcsdc.png'
import foyle2018 from './img/FMF-logo2018.png'
import homecoming2018 from './img/Homecoming-v2.png'
// import slider1 from './img/FMF2018_New_Slider_Dec.jpg'
import eventLogo1 from './img/clipper18.png'
import eventLogo2 from './img/visit-derry.png'
import TwitterTimeline from 'react-twitter-embedded-timeline'
import './App.css'
import Carousel from './components/Carousel.js'
// import { Carousel } from 'react-responsive-carousel';

class App extends Component {
 
  render () {
    return (
      <div className='App '>
        <header>
          <div className='container-fluid'>
            <img id='headerLogo' src={foyle2018} className='App-Logo col-xs-6 col-sm-6 col-md-5 col-lg-5' alt='Foyle Maritime Festival 2018' />
            <img id='headerLogo' src={homecoming2018} className='col-xs-6 col-sm-6 col-md-6 col-lg-6' alt='Join Homecoming July 2018' />
          </div>
          <div className='nav-wrapper' >
            <nav className='navbar ' >
              <div className='container'>
                <div className='collapse navbar-collapse' >
                  <ul className='nav navbar-nav navbar-right'>
                    <li><a className='navText'>Home</a></li>
                    <li className='dropdown'>
                      <a className='dropdown-toggle navText' data-toggle='dropdown'>Our Story </a>
                      <ul className='dropdown-menu navText'>
                        <li><a className='navText'>About</a></li>
                        <li className=' divider'></li>
                        <li><a className='navText'>Your Stay</a></li>
                        <li className='divider'></li>
                        <li><a className='navText'>Your Boat</a></li>
                      </ul>
                    </li>
                    <li><a className='navText'>Contact</a></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <div id='body' className='row'>
          <div className='container-fluid'>
          <Carousel />

            {/* <img id='img' src={slider1} className='img-responsive' alt='Offical Host Port Clipper 2017 2018 Race' /> */}
          </div>
        </div>
        <div className='section' id='recent-projects' >
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                <h1><strong>Foyle Maritime Returns</strong></h1>
                <p>&nbsp;</p>
                <p>The Foyle Maritime Festival returns to Derry~Londonderry from  14th – 22nd July 2018 and will host the stopover of the  Clipper Race 2017-18 as they near the end of their Round the World Journey.</p>
                <p>        Queens Quay  will once again be transformed into a maritime wonderland full of fun,  activities, music, arts and crafts as we prepare to welcome the Clipper Race  yachts back! <a href='http://www.derrystrabane.com/Council/News/Clipper-Race-set-to-return-to-City-in-2018'>Read More Here</a></p>
                <p><a href='http://www.visitderry.com/'>Book  Accommodation</a> <br/>
                </p>
                <p><a href='mailto:foylemaritime@derrystrabane.com'>Opportunities for your Business</a>  <br/>
                </p>
                <p><a href='mailto:media@derrystrabane.com'>Media Enquiries</a></p>
                <p>
                </p>
                {/* <div className='embed-container'> */}
                <iframe title='test' src='https://www.youtube.com/embed/vRpGj1zY2F0' frameBorder='0' allowFullScreen=''  width="100%"/>
                {/* </div> */}
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div className='section-colored'>
          <div className='container'>
            <div className='container clients logo-contain'>
              <div className='row'>
                <div className='col-lg-4 col-md-4 col-sm-4 col-xs-4'><img className='img-responsive' src={eventLogo2} alt='Clipper 17-18'/> </div>
                <div className='col-lg-4 col-md-4 col-sm-4 col-xs-4'> <img className='img-responsive' src={logo} alt='Derry City and Strabane District Council'/> </div>
                <div className='col-lg-4 col-md-4 col-sm-4 col-xs-4'></div>
                <span className='col-lg-4 col-md-4 col-sm-4 col-xs-4'><img className='img-responsive' src={eventLogo1} alt='Visit Derry'/></span>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
        <footer>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-3 col-md-3'>
                <h3>GET SOCIAL</h3>
                <p>#FoyleMaritime | #TeamDLD | #DerryClipper </p>
                <ul className='list-inline list-unstyled social-networks'>
                  <li>
                    <a href='https://www.facebook.com/foylemaritimefestival'>
                      <div className='icon-social icon-social-facebook normal'>
                        <i className='fa fa-facebook'></i>
                      </div>
                      <div className='icon-social hover'>
                        <i className='fa fa-facebook'></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href='https://twitter.com/foylemaritime '>
                      <div className='icon-social icon-social-twitter normal'>
                        <i className='fa fa-twitter'></i>
                      </div>
                      <div className='icon-social hover'>
                        <i className='fa fa-twitter'></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.youtube.com/channel/UCXxDAlu790v9MnTWyZfjSUQ'>
                      <div className='icon-social icon-social-youtube normal'>
                        <i className='fa fa-youtube'></i>
                      </div>
                      <div className='icon-social hover'>
                        <i className='fa fa-youtube'></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.instagram.com/foylemaritime/ '>
                      <div className='icon-social icon-social-instagram normal'>
                        <i className='fa fa-instagram'></i>
                      </div>
                      <div className='icon-social hover'>
                        <i className='fa fa-instagram'></i>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className='col-lg-3 col-md-3'>
                <h3>CONTACT</h3>
                <address>
                  <i className='fa fa-map-marker'></i> Derry City and Strabane District Council<br/>
                  98 Strand Road<br/>
                  Derry, <br/>
                  BT48 7NN <br/>
                  <i className='fa fa-phone'></i> (028) 71 253 253<br/>
                  <a href='mailto:foylemaritime@derrystrabane.com'>foylemaritime@derrystrabane.com</a>
                </address>
              </div>
              <div className='col-lg-3 col-md-3'>
                <h3>LATEST TWEETS</h3>
                <div id='tweeter' className='twitter-timeline twitter-timeline-rendered'>
                  <TwitterTimeline widgetId='395843229469270016' chrome='noborders noheader' height={300} />
                </div>
              </div>
              <div className='col-lg-3 col-md-3'>
                <h3>NEWSLETTER            </h3>
                <div className='input-group'>
                  <link href='//cdn-images.mailchimp.com/embedcode/slim-081711.css' rel='stylesheet' type='text/css'/>
                  <div id='mc_embed_signup'>
                    <form action='//derrycityandstrabanedistrict.us9.list-manage.com/subscribe/post?u=af21a5655b0fdf68785275e32&amp;id=4978b17613' method='post' id='mc-embedded-subscribe-form' name='mc-embedded-subscribe-form' className='validate' target='_blank' noValidate=''>
                      <div id='mc_embed_signup_scroll'>
                        <label htmlFor='mce-EMAIL'>Subscribe to our mailing list</label>
                        <input type='email' value='' name='EMAIL' className='email' id='mce-EMAIL' placeholder='email address' required=''/>
                        <div > 
                          {/* <input type='text' name='b_af21a5655b0fdf68785275e32_4978b17613' tabIndex='-1' value=''/> */}
                        </div>
                        <p></p>
                        <div className='clear'><input type='submit' value='Subscribe' name='subscribe' id='mc-embedded-subscribe' className='button'/></div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default App
