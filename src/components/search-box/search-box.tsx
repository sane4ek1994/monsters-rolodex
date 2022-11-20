import { ChangeEvent } from 'react'

import './search-box.styles.css'

type SearchBoxProps = {
  className: string
  placeholder?: string
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

export const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => (
  <input className={className} type='search' placeholder={placeholder} onChange={onChangeHandler} />
)
