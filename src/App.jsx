import React, { useState } from "react";
import "./App.scss";
import SideNav from "./components/SideNav/SideNav";
import Main from "./components/Main/Main";
import beerData from "./assets/data/beers";

const App = () => {
  const [beers, setBeers] = useState(beerData);

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
