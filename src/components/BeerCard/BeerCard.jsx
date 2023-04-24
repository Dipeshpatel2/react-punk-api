import React from 'react'
import "../BeerCard/BeerCard.scss"

const BeerCard = ({name, description, image, abv, ph, tagline}) => {
  return (
    <div className="beercard">
        <h1>{name}</h1>
        <h2>{tagline}</h2>
        <img className='beercard__image' src={image} alt="beer-image" />
        <p className='beercard__description'>{description}</p>
        <p>ABV: {abv}</p>
        <p>pH: {ph}</p>
    </div>
  )
}

export default BeerCard