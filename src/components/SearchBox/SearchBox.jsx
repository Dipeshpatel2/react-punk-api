import React from 'react'
import "../SearchBeer/SearchBox.scss"

const SearchBox = (props) => {
  // const { label, searchTerm, handleInput} = props

  // const capitalizedLabel = label[0].toUpperCase() + label.slice(1)
  return (
    <form className='searchbox'>
        <label for="input">Search Beer</label>
        <input type="text" id="inputBox"></input>

    </form>
  )
}

export default SearchBox