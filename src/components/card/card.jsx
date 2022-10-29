import { Component } from 'react'

import './card.styles.css'

export class Card extends Component {
  render() {
    const { id, name, email } = this.props.monster
    return (
      <div key={id} className='card-container'>
        <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monsters ${name}`} />
        <h2>{name}</h2>
        <p className='card-email'>{email}</p>
      </div>
    )
  }
}
