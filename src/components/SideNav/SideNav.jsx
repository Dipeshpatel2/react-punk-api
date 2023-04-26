import React from 'react'
import "./SideNav.scss"
import BrewdogMainLogo from "../../assets/images/brewdog-mainlogo.jpeg"
import SearchBeer from '../SearchBeer/SearchBeer'
import BeerCard from '../BeerCard/BeerCard'

const SideNav = (props) => {
  const {handleSearch} = props

  

  return (
    <div className='sidenav'>
      <img className='sidenav__image' src={BrewdogMainLogo} alt="Brewdog-Mainlogo" />
      <SearchBeer handleSearch = {handleSearch} />
      
    </div>
  )
}

export default SideNav




