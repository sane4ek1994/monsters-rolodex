import React from 'react'

import { CardList, SearchBox } from './components'
import { getData } from './utils/data.utils'

import './App.css'

export type Monster = {
  id: string
  name: string
  email: string
}

const App = () => {
  const [searchField, setSearchField] = React.useState('')
  const [title, setTitle] = React.useState('')
  const [monsters, setMonsters] = React.useState<Monster[]>([])
  const [filteredMonsters, setFilteredMonsters] = React.useState(monsters)

  React.useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users')
      setMonsters(users)
    }

    fetchUsers()
  }, [])

  React.useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField))
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setTitle(searchFieldString)
  }

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  return (
    <div className='App'>
      <h1 className='app-title'>{title}</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='search-box' />
      <br />
      <SearchBox onChangeHandler={onTitleChange} placeholder='title' className='search-box' />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App
