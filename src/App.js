import React from 'react'

import { CardList, SearchBox } from './components'

import './App.css'

const App = () => {
  const [searchField, setSearchField] = React.useState('')
  const [monsters, setMonsters] = React.useState([])
  const [filteredMonsters, setFilteredMonsters] = React.useState(monsters)

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(json => json.json())
      .then(users => setMonsters(users))
      .catch(e => console.log(e.message))
  }, [])

  React.useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField))

    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  const onSearchChange = event => {
    const searchFieldString = event.target.value.toLocaleLowerCase()

    setSearchField(searchFieldString)
  }

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='search-box' />
      <CardList monsters={filteredMonsters} className='card-list' />
    </div>
  )
}

export default App
