import { shallow, mount, render } from 'enzyme'
import { CardList } from './card-list.component'

it('expect to render Card component', () => {
  const mockRobots = [
    {
      id: '1',
      name: 'John Snow',
      username: 'JohnLeviev',
      email: '124@.gmail.com'
    }
  ]
  expect(shallow(<CardList monsters={mockRobots} />)).toMatchSnapshot()
})
