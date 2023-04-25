import React from 'react'
import "../SearchBox/SearchBox.scss"

const SearchBox = (props) => {
  const {handleSearch} = props

  return (
    <form className='searchbox'>
        <label htmlFor="input">Search Beer</label>
        <input onInput={handleSearch} type="text" id="inputBox"></input>

    </form>
  )
}

export default SearchBox