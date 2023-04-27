import React from 'react'
import BeerCard from '../BeerCard/BeerCard'
import "./Main.scss"

const Main = ({beers}) => {
  console.log(beers)
    return (
      <div className="main">
        {beers.map(beer => (
          <BeerCard
            key={beer.id}
            name={beer.name}
            tagline={beer.tagline}
            description={beer.description}
            image={beer.image_url}
            abv={beer.abv}
            ph={beer.ph}
          />
        ))}
      </div>
    )
  }
  
  export default Main;
  