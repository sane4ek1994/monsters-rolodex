import type { Monster } from '../../app/App'

import { Card } from '../card/card'

import './card-list.styles.css'

type CardListProps = {
  monsters: Monster[]
}

export const CardList = ({ monsters }: CardListProps) => (
  <div className='card-list'>
    {monsters.map((monster, index) => (
      <Card key={index} monster={monster} />
    ))}
  </div>
)
