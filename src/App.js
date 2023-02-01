import { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Filter from "./components/Filter";
import getAllCountries from "./api/utils";
import CountriesList from "./components/CountriesList";
import Pagination from "./components/Pagination";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);

  useEffect(() => {
    setIsLoading(true);
    async function getData() {
      const apiData = await getAllCountries();
      setCountries(apiData);
      setIsLoading(false);
    }
    getData();
  }, []);

  const sortCountries = () => {
    setCountries([...countries].reverse());
  };

  const onFilterValueSelected = (filterValue) => {
    setFilter(filterValue);
  };
  // Filter
  const filteredCountries = countries.filter((country) => {
    if (filter === "area") {
      return country.area < 65300;
    } else if (filter === "oceania") {
      return country.region === "Oceania";
    } else {
      return country;
    }
  });
  // Pagination
  const lastCountryIndex = currentPage * countriesPerPage;
  const firsCountryIndex = lastCountryIndex - countriesPerPage;
  const currentCountries = filteredCountries.slice(
    firsCountryIndex,
    lastCountryIndex
  );

  return (
    <div className="App">
      <Header />
      <Filter
        changeOrder={sortCountries}
        onFilterValueSelected={onFilterValueSelected}
        setCurrentPage={setCurrentPage}
      />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <CountriesList data={currentCountries} />
      )}

      <Pagination
        totalCountries={filteredCountries.length}
        countriesPerPage={countriesPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
