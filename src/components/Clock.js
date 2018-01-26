import React, { Component } from 'react'
import Countdown from 'react-count-down'

export class Clock extends Component {

render () {
  const cb = () => {
    console.log('expired callback')
  }

  const OPTIONS = { endDate: '03/01/2018 10:55 AM', prefix: '', cb}

  return (
    <div >
      <Countdown options={OPTIONS} />
    </div>

    )
  }
}

export default Clock