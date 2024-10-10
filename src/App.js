import { useEffect } from "react";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import { useWeather } from "./context/Weather";

import "./App.css";

function App() {
  const weather = useWeather();
  console.log(weather);

  useEffect(() => {
    // Get Current Location
    weather.fetchCurrentUserLocationData();
  }, []);

  return (
    <div className="App container col-lg-6 pt-5">
      <h1>Weather Forecast</h1>
      
      <div className="row mb-2">
        <div className="col-lg-8">    <Input /></div>
        <div className="col-lg-4 but">   <Button onClick={weather.fetchData} value="Search" /></div>
      </div>
  
    
      {/* <span> <Button value="Refresh" /></span> */}
      <Card />
     
    </div>
  );
}

export default App;
