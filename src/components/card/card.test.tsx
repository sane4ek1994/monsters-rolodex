import { shallow, mount, render } from 'enzyme'
import { Card } from './card'

it('expect to render Card component', () => {
  expect(
    shallow(
      <Card
        monster={{
          id: '',
          name: '',
          email: ''
        }}
      />
    )
  ).toMatchSnapshot()
})
