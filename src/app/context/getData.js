"use client";

import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [countries, setCountries] = useState(null);

  const fetchCountries = async () => {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const result = await res.json();
      setCountries(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const contextValue = {
    countries,
    fetchCountries,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  return [context.countries, context.fetchCountries];
};
