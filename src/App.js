import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Weather from "./components/weather";
import Navbar from "./components/navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function App() {
  const [lat, setLat] = useState([null]);
  const [long, setLong] = useState([null]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude.toFixed(4));
        setLong(position.coords.longitude.toFixed(4));
      });

      if (lat != "" && long != "") {
        let response = await axios.get(
          `http://api.weatherapi.com/v1/forecast.json?q=${lat},${long}&aqi=yes&key=6d2b76bc690d467ca3881147220501`
        );

        setData(response.data);
        console.log(response.data);
      }
    };
    fetchData();
  }, [lat, long]);
  return (
    <div className="App">
      <Navbar />
      {typeof data.location != "undefined" ? (
        <>
          <Weather weatherData={data} />
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
