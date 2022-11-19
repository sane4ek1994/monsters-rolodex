import { ChangeEventHandler } from 'react'

import './search-box.styles.css'

type SearchBoxProps = {
  className: string
  placeholder?: string
  onChangeHandler: ChangeEventHandler<HTMLInputElement>
}

export const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => (
  <input className={className} type='search' placeholder={placeholder} onChange={onChangeHandler} />
)
