import React from 'react';
import "./SideNav.scss";
import BrewdogMainLogo from "../../assets/images/brewdog-mainlogo.jpeg";
import SearchBeer from '../SearchBeer/SearchBeer';

const SideNav = ({ handleSearch, handleCheckBoxHighABV, handleCheckBoxHighAcidity, handleCheckBoxClassicRange }) => {
  return (
    <div className='sidenav'>
      <img className='sidenav__image' src={BrewdogMainLogo} alt="Brewdog-Mainlogo" />
      <SearchBeer handleSearch={handleSearch} />
      <label htmlFor="highABV"> High ABV (ABV value greater than 6%)</label>
      <input type="checkbox" id="highABV" value="highABV" onChange={handleCheckBoxHighABV} />

      <label htmlFor='highAcidity'> High Acidity (pH lower than 4)</label>
      <input type="checkbox" id='highAcidity' value='highAcidity' onChange={handleCheckBoxHighAcidity} />

      <label htmlFor="classicRange">Classic Range (Was first brewed before 2010)</label>
      <input type="checkbox" id="classicRange" value="classicRange" onChange={handleCheckBoxClassicRange} />
    </div>
  )
}

export default SideNav;







