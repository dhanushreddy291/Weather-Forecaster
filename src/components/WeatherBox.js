import React from "react";
import { Weather, PreLoader } from ".";

export default function WeatherBox({ data, city, loading }) {
  if (loading) return <PreLoader />;
  else {
    return (
      <div className="weather-box">
        <Weather weatherData={data} />
      </div>
    );
  }
}
