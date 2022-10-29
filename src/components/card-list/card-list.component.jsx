import React from 'react'

import { Card } from '../card/card'

import './card-list.styles.css'

export const CardList = ({ monsters }) => (
  <div className='card-list'>
    {monsters.map((monster, index) => (
      <Card key={index} monster={monster} />
    ))}
  </div>
)

// export class CardList extends Component {
//   render() {
//     const { monsters } = this.props

//     return (
// <div className='card-list'>
//   {monsters.map((monster, index) => (
//     <Card key={index} monster={monster} />
//   ))}
// </div>
//     )
//   }
// }
