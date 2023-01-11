import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import App from './App'

it('expect to render app component', () => {
  const app = shallow(<App />)
  expect(toJson(app)).toMatchSnapshot()
})

it('corretcly increments the counter', () => {
  const wrapper = shallow(<App />)
  wrapper.find('[id="counter"]').simulate('click')
  wrapper.find('[id="counter"]').simulate('click')
  expect(wrapper.state()).toEqual({ counter: 2 })
})
