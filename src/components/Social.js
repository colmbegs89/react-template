import React, { Component } from 'react'

export class Social extends Component {

  render () {
    //below are exmaple of the tags that can be used...edit or remove as neccessary
    let facebookUrl = 'https://www.facebook.com/foylemaritimefestival'
    let twitterUrl = 'https://twitter.com/foylemaritime'
    let youtubeUrl = 'https://www.youtube.com/channel/UCXxDAlu790v9MnTWyZfjSUQ'
    let instagramUrl = 'https://www.instagram.com/foylemaritime/'

    return (
      <div>
      <ul id="social_side_links">
        <li>
          <a href={facebookUrl}>
          <div className='icon-social icon-social-facebook normal'>
          <i className='fa fa-facebook'></i>
          </div>
          </a>
        </li>
        <li>
          <a href={twitterUrl}>
          <div className='icon-social icon-social-twitter normal'>
          <i className='fa fa-twitter'></i>
          </div>
          </a>
        </li>
        <li>
          <a href={youtubeUrl}>
          <div className='icon-social icon-social-youtube normal'>
          <i className='fa fa-youtube'></i>
          </div>
          </a>
        </li>
        <li>
          <a href={instagramUrl}>
          <div className='icon-social icon-social-instagram normal'>
          <i className='fa fa-instagram'></i>
          </div>
          </a>
        </li>
      </ul>
    </div>
    )
  }
}

export default Social