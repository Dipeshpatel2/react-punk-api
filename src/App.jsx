import "./App.scss";
import SideNav from "./components/SideNav/SideNav";
import Main from "./components/Main/Main";

import React from "react";

const App = () => {
  return (
    <div className="App">
      <SideNav />

      <Main />
    </div>
  );
};

export default App;
