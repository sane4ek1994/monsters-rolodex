import { shallow, mount, render } from 'enzyme'
import toJson from 'enzyme-to-json'
import { CardList } from './card-list.component'

it('expect to render Card-list component', () => {
  const mockRobots = [
    {
      id: '1',
      name: 'John Snow',
      username: 'JohnLeviev',
      email: '124@.gmail.com'
    }
  ]

  const cardListComponent = shallow(<CardList monsters={mockRobots} />)
  expect(toJson(cardListComponent)).toMatchSnapshot()
})
