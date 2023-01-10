import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { ChangeEvent } from 'react'

import { SearchBox } from './search-box'

it('expect to render search-box component', () => {
  const searchBoxComponent = shallow(
    <SearchBox
      className={''}
      onChangeHandler={function (event: ChangeEvent<HTMLInputElement>): void {
        throw new Error('Function not implemented.')
      }}
    />
  )

  expect(toJson(searchBoxComponent)).toMatchSnapshot()
})
