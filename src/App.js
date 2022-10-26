import { Component } from 'react'

import logo from './logo.svg'
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
        <input type='search' placeholder='search monsters' onChange={onSearchChange} />
        {filteredMonsters.map(monster => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </div>
    )
  }
}

export default App
