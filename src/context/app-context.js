import React, { useState } from "react";
import { createContext } from "react";
import { CitiesList } from "../helper/constant";

export const MyContext = createContext();

export const ApplicationContextProvider = ({ children }) => {
  const [selectedCities, setSelectedCities] = useState([]);  
  const [allCities, setAllCities] = useState(CitiesList);
  const [currentCity , setCurrentCity] = useState(null)
  const [favoriteCities, setFavoriteCities] = useState([])

  const value = {
    selectedCities,
    setSelectedCities,    
    allCities,
    setAllCities, 
    favoriteCities, 
    setFavoriteCities,
    currentCity,
    setCurrentCity
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
