import "./App.css";
import React, { useEffect, useState } from "react";
import { Weather, Navbar } from "./components";
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
          `https://api.weatherapi.com/v1/forecast.json?q=${lat},${long}&aqi=yes&key=${process.env.REACT_APP_API_KEY}`
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
        <div className="weather-box">
          <Weather weatherData={data} />
        </div>
      ) : (
        <lottie-player
          src="https://assets9.lottiefiles.com/packages/lf20_cgxasnue.json"
          background="transparent"
          speed="1"
          style={{ width: "300px", height: "300px" }}
          loop
          autoplay
        ></lottie-player>
      )}
    </div>
  );
}

export default App;
