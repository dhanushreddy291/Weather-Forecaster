import React from "react";
import { Weather, PreLoader, Graph } from ".";
import "./styles/weather.css";

export default function WeatherBox({ data, city, loading }) {
  const Colors = [
    ["#FFCD3C", "#FEF9EF"],
    ["#64c4ed", "#FCFAFA"],
    ["#FE7E6D", "#F3C5C5"],
    ["#91C483", "#E7FBBE"],
  ];
  const index = Math.floor(Math.random() * Colors.length);
  const TopColor = Colors[index][0];
  const BottomColor = Colors[index][1];
  if (loading) return <PreLoader />;
  else {
    return (
      <div className="box">
        <Weather
          weatherData={data}
          TopColor={TopColor}
          BottomColor={BottomColor}
        />
        <div className="Graph">
          <Graph Data={data} TopColor={TopColor} />
        </div>
      </div>
    );
  }
}
