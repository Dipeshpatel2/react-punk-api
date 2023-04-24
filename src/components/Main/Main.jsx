import React from 'react'
import BeerCard from '../BeerCard/BeerCard'
import "./Main.scss"

const Main = (props) => {
  const {beers} = props
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
  
// const Main = () => {
//     const exampleBeer = beers[0]
//   return (
//     <div>
//         <BeerCard name = {exampleBeer.name} tagline = {exampleBeer.tagline} description ={exampleBeer.description} image = {exampleBeer.image_url}
//          abv = {exampleBeer.abv} ph = {exampleBeer.ph}/>
        
//     </div>
//   )
// }

// export default Main