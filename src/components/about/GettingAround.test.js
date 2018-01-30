import React from 'react'
import ReactDOM from 'react-dom'
import GettingAround from './GettingAround'
import { expect } from 'chai'
import { shallow } from 'enzyme'

describe('GettingAround', () => {
  it('App renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<GettingAround />, div)
  })

  it('has a defined structure', () => {
    const wrapper = shallow(<GettingAround />)

    expect(wrapper.find('.GettingAround')).to.have.length(1)
    expect(wrapper.find('.container-fluid')).to.have.length(1)
    expect(wrapper.find('.bodyDiv')).to.have.length(1)
    expect(wrapper.find('.row')).to.have.length(5)
    expect(wrapper.find('footer')).to.have.length(1)
  })
})
