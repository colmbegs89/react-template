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
    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 offset-md-6 col-lg-6 offset-lg-6">
      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 card text-center" style={{backgroundColor:"black", color: "white"}}>
        <div className="card-block">
          <p className="card-text text-center">Days</p>
          <h3 className="card-title text-center" style={{color: "white"}}>{this.leadingZero(this.state.days)}</h3>
        </div>
      </div>
      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1  text-center">
        </div>
      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 card text-center" style={{backgroundColor:"black", color: "white"}}>
        <div className="card-block">
          <p className="card-text text-center">Hours</p>
          <h3 className="card-title text-center" style={{color: "white"}}>{this.leadingZero(this.state.hours)}</h3>
        </div>
      </div>
      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-center">
        </div>
      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 card text-center responsive" style={{backgroundColor:"black", color: "white"}}>
        <div className="card-block">
          <p className="card-text text-center">Minutes</p>
          <h3 className="card-title text-center" style={{color: "white"}}>{this.leadingZero(this.state.minutes)}</h3>
        </div>
      </div>
    </div>
    )
  }
}

export default Clock