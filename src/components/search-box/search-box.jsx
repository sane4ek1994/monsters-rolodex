import React from 'react'

import './search-box.styles.css'

export const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <input className={className} type='search' placeholder={placeholder} onChange={onChangeHandler} />
)
