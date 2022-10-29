import React from 'react'

import './card.styles.css'

export const Card = ({ monster }) => {
  const { id, name, email } = monster

  return (
    <div key={id} className='card-container'>
      <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monsters ${name}`} />
      <h2>{name}</h2>
      <p className='card-email'>{email}</p>
    </div>
  )
}
