import React from 'react'
import SearchBox from '../SearchBox/SearchBox'


const SearchBeer = (props) => {
  const {handleSearch} = props
  return (
    <div className='searchbeer'>
      <SearchBox handleSearch = {handleSearch} />
    </div>
  )
}

export default SearchBeer