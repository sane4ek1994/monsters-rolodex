import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Card } from './card'

it('expect to render Card component', () => {
  const cardComponent = shallow(
    <Card
      monster={{
        id: '',
        name: '',
        email: ''
      }}
    />
  )
  expect(toJson(cardComponent)).toMatchSnapshot()
})
