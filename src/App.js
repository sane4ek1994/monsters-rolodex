import { Component } from 'react'

import { CardList, SearchBox } from './components'

import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchString: ''
    }
  }

  onSearchChange = event => {
    const searchString = event.target.value.toLocaleLowerCase()

    this.setState(() => {
      return { searchString }
    })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(json => json.json())
      .then(users => this.setState(() => ({ monsters: users })))
  }

  render() {
    const { monsters, searchString } = this.state
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchString))

    return (
      <div className='App'>
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='search-box' />
        <CardList monsters={filteredMonsters} className='card-list' />
      </div>
    )
  }
}

export default App
