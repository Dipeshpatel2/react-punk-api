import React, { useState, useEffect } from "react";
import "./App.scss";
import SideNav from "./components/SideNav/SideNav";
import Main from "./components/Main/Main";
//import beerData from "./assets/data/beers";

const App = () => {
  const [beerInfo, setBeerInfo] = useState([]);
  const [classicRange, setClassicRange] = useState(false);
  const [highABV, setHighABV] = useState(false);
  const [highAcidity, setHighAcidity] = useState(false);
  const [storeBeer, setStoreBeer] = useState([])

  const getBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers?page=1&per_page=80";
    const response = await fetch(url);
    const data = await response.json();
    setBeerInfo(data);
    setStoreBeer(data)
  };

  useEffect(() => {
    getBeers();
  }, []);

  const handleSearch = (event) => {
    console.log(event.target.value);
    const filteredBeers = beerInfo.filter((beer) =>
      beer.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setBeerInfo(filteredBeers);
  };

  const filterBeers = (event) => {
    console.log(event)
    if (event.target.checked && event.target.id== "highABV") {
    
      const filteredBeers = beerInfo.filter((beer) => {
          return beer.abv > 6;
      });
      setBeerInfo(filteredBeers);
    }else if(event.target.checked && event.target.id== "highAcidity"){
        const filteredBeers = beerInfo.filter((beer) => {
          return beer.ph < 4; //&& beer.ph;       
        });
        setBeerInfo(filteredBeers);
    }else  {
  
      setBeerInfo(storeBeer)
    }

  };

  const handleCheckBoxHighABV = (event) => {
    setHighABV(event.target.checked);
    filterBeers(event);
  };

  const handleCheckBoxHighAcidity = (event) => {
    setHighAcidity(event.target.checked);
    filterBeers(event)
    
  };

  const handleCheckBoxClassicRange = (event) => {
    setClassicRange(event.target.checked);

    const filteredBeers = beerInfo.filter((beer) => {
      if (event.target.checked) {
        const [month, year] = beer.first_brewed.split("/");
        return parseInt(month, year) < 2011;
      } else {
        return true;
      }
    });

    setBeerInfo(filteredBeers);
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
//===================================

// import React, { useState, useEffect } from "react";
// import "./App.scss";
// import SideNav from "./components/SideNav/SideNav";
// import Main from "./components/Main/Main";
// import beerData from "./assets/data/beers";

// const App = () => {
//   const [beers, setBeers] = useState(beerData);

//   const [beerInfo, setBeerInfo] = useState()
//   const [classic, setClassic] = useState(false)
//   const [highABV, setHighABV] = useState(false)
//   const [highAcidity, setHighAcidity] = useState(false)

//   const getBeers = async () => {
//     const url = "https://api.punkapi.com/v2/beers"
//     const response = await fetch(url)
//     const data = await response.json()
//     setBeerInfo(data)
//   }
// useEffect(() => {
//   getBeers()
// }, [])

//   const handleSearch = (event) => {
//     console.log(event.target.value);
//     // Update the state with the filtered beers based on search query
//     const filteredBeers = beerData.filter((beer) =>
//       beer.name.toLowerCase().includes(event.target.value.toLowerCase())
//     );
//     setBeers(filteredBeers);
//   };

//   const handleCheckBoxHighABV =(event) => {
//     console.log(event)
//     //if highABV
// //if highABV is true we want to change the state
// //if
//   }
//   const handleCheckBoxHighAcidity = (event) => {
//     console.log(event)
//   }

//   const handleCheckBoxClassicRange = (event) => {
//     console.log(event)
//   }

//   return (
//     <div className="App">
//       <SideNav handleSearch={handleSearch}
//       handleCheckBoxHighABV = {handleCheckBoxHighABV}
//       handleCheckBoxClassicRange ={handleCheckBoxClassicRange}
//       handleCheckBoxHighAcidity = {handleCheckBoxHighAcidity}
//       />
//       <Main beers={beers} />

//     </div>
//   );
// };

// export default App;
