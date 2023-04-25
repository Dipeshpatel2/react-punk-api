import React from "react";
import "./SideNav.scss";
import BrewdogMainLogo from "../../assets/images/brewdog-mainlogo.jpeg";
import SearchBeer from "../SearchBeer/SearchBeer";

const SideNav = (props) => {
  const {
    handleSearch,
    handleHighAlcoholFilterChange,
    handleClassicRangeFilterChange,
    handleHighAcidityFilterChange,
    filters
  } = props;

  return (
    <div className="sidenav">
      <img className="sidenav__image" src={BrewdogMainLogo} alt="Brewdog-Mainlogo" />
      <SearchBeer handleSearch={handleSearch} />
      <div className="sidenav__filters">
        <label>
          <input
            type="checkbox"
            name="highAlcohol"
            checked={filters.highAlcohol}
            onChange={handleHighAlcoholFilterChange}
          />
          High Alcohol (ABV value greater than 6%)
        </label>
        <label>
          <input
            type="checkbox"
            name="classicRange"
            checked={filters.classicRange}
            onChange={handleClassicRangeFilterChange}
          />
          Classic Range (was first brewed before 2010)
        </label>
        <label>
          <input
            type="checkbox"
            name="highAcidity"
            checked={filters.highAcidity}
            onChange={handleHighAcidityFilterChange}
          />
          High Acidity (pH lower than 4)
        </label>
      </div>
    </div>
  );
};
export default SideNav;


