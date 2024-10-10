import React from "react";
import { useWeather } from "../context/Weather";
function Input (){
  const weather = useWeather();

  return (
    
     <input
    type="text"
      className="form-control rounded-0 w-100"
      placeholder="Search here"
      value={weather.searchCity}
      onChange={(e) => weather.setSearchCity(e.target.value)}
    />

  
  );
};

export default Input;
