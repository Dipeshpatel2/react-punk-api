import React, { useState, useEffect } from "react";
import "./App.scss";
import SideNav from "./components/SideNav/SideNav";
import Main from "./components/Main/Main";
import beerData from "./assets/data/beers";

const App = () => {
  const [beers, setBeers] = useState(beerData);

  


  const [beerInfo, setBeerInfo] = useState()

  const getBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers"
    const response = await fetch(url)
    const data = await response.json()
    setBeerInfo(data)
  }
useEffect(() => {
  getBeers()
}, [])   


  const handleSearch = (event) => {
    console.log(event.target.value);
    // Update the state with the filtered beers based on search query
    const filteredBeers = beerData.filter((beer) =>
      beer.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setBeers(filteredBeers);
  };

  return (
    <div className="App">
      <SideNav handleSearch={handleSearch} />
      <Main beers={beers} />
    </div>
  );
};

export default App;
