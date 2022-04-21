import React from 'react'
import { useGlobalHook } from '../../context/context'

const SearchBar = ({ placeholder }) => {
  const { handleSearchBar } = useGlobalHook();

  return (
    <input className='search-bar' type='search' placeholder={placeholder} onChange={(e) => handleSearchBar(e)} />
  )
}

export default SearchBar