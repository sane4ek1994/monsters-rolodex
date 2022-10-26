import { Component } from 'react'

export class CardList extends Component {
  render() {
    console.log('renderList')
    const { monsters } = this.props

    return (
      <div>
        {monsters.map(monster => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </div>
    )
  }
}
