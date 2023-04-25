import React, { useState } from "react";
import "./App.scss";
import SideNav from "./components/SideNav/SideNav";
import Main from "./components/Main/Main";
import beerData from "./assets/data/beers";

const App = () => {
  const [beers, setBeers] = useState(beerData);
  const [filters, setFilters] = useState({
    highAlcohol: false,
    classicRange: false,
    highAcidity: false,
  });

  const handleSearch = (event) => {
    console.log(event.target.value);
    // Update the state with the filtered beers based on search query
    const filteredBeers = beerData.filter((beer) =>
      beer.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setBeers(filteredBeers);
  };
  //High Alcohol Function
  const handleHighAlcoholFilterChange = (event) => {
    const { checked } = event.target;
    setFilters({
      ...filters,
      highAlcohol: checked,
    });

    //High alcohol filter
    const filteredBeers = beerData.filter((beer) =>
      checked ? beer.abv > 6 : true
    );

    setBeers(filteredBeers);
  };
  //Classic Range Function
  const handleClassicRangeFilterChange = (event) => {
    const { checked } = event.target;
    setFilters({
      ...filters,
      classicRange: checked,
    });

    // Classic Range Filter
    const filteredBeers = beerData.filter((beer) => {
      // Extract the year from the first_brewed date string
      const year = parseInt(beer.first_brewed.split("/")[1]);
      return checked ? year < 2010 : true;
    });

    setBeers(filteredBeers);
  };

  // High Acidity Function
  const handleHighAcidityFilterChange = (event) => {
    const { checked } = event.target;
    setFilters({
      ...filters,
      highAcidity: checked,
    });
    //High Acidity Filter
    const filteredBeers = beerData.filter((beer) =>
      checked ? beer.ph < 4 && beer.ph : true
    );

    setBeers(filteredBeers);
  };
  //SideNav has several props as functions in the return.
  return (
    <div className="App">
      <SideNav
        handleSearch={handleSearch}
        handleHighAlcoholFilterChange={handleHighAlcoholFilterChange}
        handleClassicRangeFilterChange={handleClassicRangeFilterChange}
        handleHighAcidityFilterChange={handleHighAcidityFilterChange}
        filters={filters}
      />
      <Main beers={beers} />
    </div>
  );
};

export default App;
