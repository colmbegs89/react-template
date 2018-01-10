import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { expect } from 'chai'
import { shallow } from 'enzyme'

describe('App', () => {
  it('App renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })

  it('has a defined structure', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('#appNavBar')).to.have.length(1)
    expect(wrapper.find('.navbar')).to.have.length(1)
  })
})
