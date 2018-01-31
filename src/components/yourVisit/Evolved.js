import React, { Component } from 'react'
import TwitterTimeline from 'react-twitter-embedded-timeline'

//images
import councillogo from '../../img/dcsdc.png'
import headerLogo1 from '../../img/FMF-logo2018.png'
import headerLogo2 from '../../img/Homecoming-v2.png'
import eventLogo1 from '../../img/visit-derry.png'
import eventLogo2 from '../../img/clipper18.png'
import pageImage from '../../img/about.jpg'
import Navigation from '../Navigation.js'
import Social from '../Social.js'

export class Evolved extends Component {

  //Place the body inside of the 'bodyDiv'
 getDefinedBody () {
   let breadcrumb = 'About Derry~Londonderry'
   return (
    <div className='bodyDiv'>
   
    </div>
   )
 }
  render () {
    //below are exmaple of the tags that can be used...edit or remove as neccessary

    let pageHeader = 'Evolved'
    let bodyContent = this.getDefinedBody()
    let headerAlt1 = 'Foyle Maritime Festival 2018'
    let headerAlt2 = 'Join Homecoming July 2018'
    let eventAlt2 = 'Clipper 17-18'
    let eventAlt1 = 'Visit Derry'
    let socialHashtags = '#FoyleMaritime | #TeamDLD | #DerryClipper'
    let facebookUrl = 'https://www.facebook.com/foylemaritimefestival'
    let twitterUrl = 'https://twitter.com/foylemaritime'
    let youtubeUrl = 'https://www.youtube.com/channel/UCXxDAlu790v9MnTWyZfjSUQ'
    let instagramUrl = 'https://www.instagram.com/foylemaritime/'
    let twitterWidget = '395843229469270016'
    let mailToAddress = 'foylemaritime@derrystrabane.com'


    return (
      <div className={pageHeader}>
        <header>
        <Navigation />

      </header>
      <div id='body' className='body row'>

      <div className="section-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">{pageHeader}</h1>
          </div>
        </div>
      </div>
    </div>
    <div className='section' id='recent-projects' >
          <div className='container'>
            <div className='row'>
                {bodyContent}
            </div>
          </div>
        </div>
    <div className='section-colored col-lg-12 col-md-12 col-sm-12 col-xs-12'>
          <div className='container'>
            <div className='container clients logo-contain'>
              <div className='row'>
                <div className='col-lg-4 col-md-4 col-sm-4 col-xs-4'><img className='img-responsive' src={eventLogo1} alt={eventAlt1}/> </div>
                <div className='col-lg-4 col-md-4 col-sm-4 col-xs-4'> <img className='img-responsive' src={councillogo} alt='Derry City and Strabane District Council'/> </div>
                <span className='col-lg-4 col-md-4 col-sm-4 col-xs-4'><img className='img-responsive' src={eventLogo2} alt={eventAlt2}/></span>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className='container'>
            <div className='row col-lg-12 col-md-12 col-sm-12 col-xs-12'>
              <div className='col-lg-4 col-md-4'>
                <h3>CONTACT</h3>
                <address>
                  <i className='fa fa-map-marker'></i> Derry City and Strabane District Council<br/>
                  98 Strand Road<br/>
                  Derry, <br/>
                  BT48 7NN <br/>
                  <i className='fa fa-phone'></i> (028) 71 253 253<br/>
                  <a href={'mailto:' + mailToAddress}>{mailToAddress}</a>
                </address>
              </div>
              <div className='col-lg-4 col-md-4'>
                <h3>LATEST TWEETS</h3>
                <div id='tweeter' className='twitter-timeline twitter-timeline-rendered'>
                  <TwitterTimeline widgetId={twitterWidget} chrome='noborders noheader' height={300} />
                </div>
              </div>
              <div className='col-lg-4 col-md-4'>
                <h3>NEWSLETTER            </h3>
                <div className='input-group'>
                  <link href='//cdn-images.mailchimp.com/embedcode/slim-081711.css' rel='stylesheet' type='text/css'/>
                  <div id='mc_embed_signup'>
                    <form action='//derrycityandstrabanedistrict.us9.list-manage.com/subscribe/post?u=af21a5655b0fdf68785275e32&amp;id=4978b17613' method='post' id='mc-embedded-subscribe-form' name='mc-embedded-subscribe-form' className='validate' target='_blank' noValidate=''>
                      <div id='mc_embed_signup_scroll'>
                        <label htmlFor='mce-EMAIL'>Subscribe to our mailing list</label>
                        <input type='email' name='EMAIL' className='email' id='mce-EMAIL' placeholder='email address' required=''/>
                        <div >  
                          <input type='text' name='b_af21a5655b0fdf68785275e32_4978b17613' tabIndex='-1' value='' hidden/>
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
        <Social />
    </div>
    </div>
    )
  }
}

export default Evolved