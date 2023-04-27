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

  const getBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    setBeerInfo(data);
  };

  useEffect(() => {
    console.log("inside this is running")
    getBeers();
  },[]);

  const handleSearch = (event) => {
    console.log(event.target.value);
    // Update the state with the filtered beers based on search query
    const filteredBeers = beerInfo.filter((beer) =>
      beer.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setBeerInfo(filteredBeers);
  };

  const handleCheckBoxHighABV = (event) => {
    // Update the state with the checked value
    setHighABV(event.target.checked);
  
    // Filter the beers based on the checked value
    const filteredBeers = beerInfo.filter((beer) => {
      if (event.target.checked) {
        // If checked, only return beers with high ABV
        return beer.abv > 6;
      } else {
        // If unchecked, return all beers
        return true;
      }
    });
  
    // Update the beers state with the filtered beers
    setBeerInfo(filteredBeers);
  };
  
  const handleCheckBoxHighAcidity = (event) => {
    // Update the state with the checked value
    setHighAcidity(event.target.checked);
  
    // Filter the beers based on the checked value
    const filteredBeers = beerInfo.filter((beer) => {
      if (event.target.checked) {
        // If checked, only return beers with high acidity
        return beer.ph < 4  && beer.ph;
      } else {
        // If unchecked, return all beers
        return true;
      }
    });
  
    // Update the beers state with the filtered beers
    setBeerInfo(filteredBeers);
  };
  
  const handleCheckBoxClassicRange = (event) => {
    // Update the state with the checked value
    setClassicRange(event.target.checked);
  
    // Filter the beers based on the checked value
    const filteredBeers = beerInfo.filter((beer) => {
      if (event.target.checked) {
        // If checked, only return beers in classic range
        return beer.first_brewed.includes("2010");
      } else {
        // If unchecked, return all beers
        return true;
      }
    });
  
    // Update the beers state with the filtered beers
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
