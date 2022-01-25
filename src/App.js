import "./App.css";
import React, { useEffect, useState } from "react";
import { Navbar, WeatherBox } from "./components";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);
  const [lat, setLat] = useState([null]);
  const [long, setLong] = useState([null]);
  const [city, setCity] = useState(null);
  const [data, setData] = useState([]);

  navigator.geolocation.getCurrentPosition(function (position) {
    setLat(position.coords.latitude.toFixed(4));
    setLong(position.coords.longitude.toFixed(4));
  });

  useEffect(() => {
    const fetchData = async () => {
      if (city === null || city.length <= 3) {
        if (lat != "" && long != "") {
          if (typeof data.location == "undefined") {
            setLoading(true);
            let response = await axios.get(
              `https://api.weatherapi.com/v1/forecast.json?q=${lat},${long}&aqi=yes&key=${process.env.REACT_APP_API_KEY}`
            );
            setData(response.data);
            setLoading(false);
            // console.log(response.data);
          }
        }
      } else {
        // console.log("city = " + city);
        setLoading(true);
        let response = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?q=${city}&aqi=yes&key=${process.env.REACT_APP_API_KEY}`
        );
        setData(response.data);
        setLoading(false);
        // console.log(response.data);
      }
    };
    fetchData();
  }, [lat, long, city]);

  return (
    <div className="App">
      <Navbar setCity={setCity} city={city} />
      <WeatherBox
        data={data}
        setLoading={setLoading}
        city={city}
        loading={loading}
      />
    </div>
  );
}

export default App;
