import React, { Component } from 'react'
// import Countdown from 'react-count-down'

export class Clock extends Component {
  constructor(props){
    super(props)
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentWillMount () {
    this.getTime(this.props.deadline)
  }

  componentDidMount () {
    setInterval(()=> this.getTime(this.props.deadline),1000)
  }
  
  getTime(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date())
    const seconds = Math.floor((time/1000) % 60)
    const minutes = Math.floor((time/1000/60) % 60)
    const hours = Math.floor(time/(1000*60*60) % 24)
    const days = Math.floor(time/(1000*60*60*24))
    
    this.setState({days, hours, minutes, seconds})
  }

  leadingZero(num) {
    if (num <10) {
      return '0' +num
    }
    return num
  }

render () {

  return (
    <div className='row' >
        <p className='clock-days col-lg-2 col-md-2 col-sm-2 col-xs-2'>{this.leadingZero(this.state.days)} </p>
        <p className='clock-hours col-lg-2 col-md-2 col-sm-2 col-xs-2'>{this.leadingZero(this.state.hours)} </p>
        <p className='clock-minutes col-lg-2 col-md-2 col-sm-2 col-xs-2'>{this.leadingZero(this.state.minutes)} </p>
    </div>

    )
  }
}

export default Clock