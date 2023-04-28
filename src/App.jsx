import React, { useState, useEffect } from "react";
import "./App.scss";
import SideNav from "./components/SideNav/SideNav";
import Main from "./components/Main/Main";

const App = () => {
  const [beerInfo, setBeerInfo] = useState([]);
  const [classicRange, setClassicRange] = useState(false);
  const [highABV, setHighABV] = useState(false);
  const [highAcidity, setHighAcidity] = useState(false);
  const [storeBeer, setStoreBeer] = useState([]);

  const getBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers?page=1&per_page=80";
    const response = await fetch(url);
    const data = await response.json();
    setBeerInfo(data);
    setStoreBeer(data);
  };

  useEffect(() => {
    getBeers();
  }, []);

  const handleSearch = (event) => {
    if (event.target.value) {
      console.log(event.target.value);
      const filteredBeers = beerInfo.filter((beer) =>
        beer.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setBeerInfo(filteredBeers);
    } else{
      setBeerInfo(storeBeer);
    }
  };
 
  const filterBeers = (event) => {
  console.log(event);
  if (event.target.checked && event.target.id === "highABV") {
    const filteredBeers = beerInfo.filter((beer) => {
      return beer.abv > 6;
    });
    setBeerInfo(filteredBeers);
  } else if (event.target.checked && event.target.id === "highAcidity") {
    const filteredBeers = beerInfo.filter((beer) => {
      return beer.ph < 4;
    });
    setBeerInfo(filteredBeers);
  } else if (event.target.checked && event.target.id === "classicRange") {
    const filteredBeers = beerInfo.filter((beer) => {
      if (event.target.checked) {
        const [month, year] = beer.first_brewed.split("/");
        return parseInt(year) < 2011;
      } else {
        return true;
      }
    });
    setBeerInfo(filteredBeers);
  } else {
    setBeerInfo(storeBeer);
  }
};

const handleCheckBoxHighABV = (event) => {
  setHighABV(event.target.checked);
  filterBeers(event);
};

const handleCheckBoxHighAcidity = (event) => {
  setHighAcidity(event.target.checked);
  filterBeers(event);
};

const handleCheckBoxClassicRange = (event) => {
  setClassicRange(event.target.checked);
  filterBeers(event);
};

  return (
    <div className="App">
      <SideNav
        handleSearch={handleSearch}
        handleCheckBoxHighABV={handleCheckBoxHighABV}
        handleCheckBoxClassicRange={handleCheckBoxClassicRange}
        handleCheckBoxHighAcidity={handleCheckBoxHighAcidity}
      />
      <Main beers={beerInfo} />
    </div>
  );
};

export default App;


