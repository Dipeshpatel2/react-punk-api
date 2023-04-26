import React from 'react'
import SearchBox from '../SearchBox/SearchBox'


const SearchBeer = ({handleSearch}) => {
  return (
    <div className='searchbeer'>
      <SearchBox handleSearch = {handleSearch} />
    </div>
  )
}

export default SearchBeer