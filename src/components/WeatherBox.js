import React from "react";
import { Weather, PreLoader, Graph } from ".";
import "./styles/weather.css";

export default function WeatherBox({ data, city, loading }) {
  if (loading) return <PreLoader />;
  else {
    return (
      <div className="box">
        <Weather weatherData={data} />
        <div className="Graph">
          <Graph Data={data} />
        </div>
      </div>
    );
  }
}
