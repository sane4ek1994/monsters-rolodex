import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import App from './App'

describe('App component test', () => {
  it('expect to render app component', () => {
    const app = shallow(<App />)
    expect(toJson(app)).toMatchSnapshot()
  })

  // it('corretcly increments the counter', () => {
  //   const wrapper = shallow(<App />)
  //   wrapper.find('[id="counter"]').simulate('click')
  //   wrapper.find('[id="counter"]').simulate('click')
  //   expect(wrapper.state()).toEqual({ counter: 2 })
  //   wrapper.find('[id="counter"]').simulate('click')
  //   expect(wrapper.state()).toEqual({ counter: 3 })
  // })

  it('useState mock', () => {
    const initialStateForFirstUseStateCall = 0
    const initialStateForSecondUseStateCall = 1

    React.useState = jest
      .fn()
      .mockReturnValueOnce([initialStateForFirstUseStateCall, {}])
      .mockReturnValueOnce([initialStateForSecondUseStateCall, {}])

    const wrapper = shallow(<App />)
    wrapper.find('[id="counter"]').simulate('click')
    expect(wrapper.state()).toEqual({ counter: 1 })
  })
})
