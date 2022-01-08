import * as React from "react";
import "./styles/weather.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function weather({ weatherData }) {
  const date = new Date(weatherData.location.localtime);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const FormattedDate = `${
    date.getHours() >= 12 ? date.getHours() - 12 : date.getHours()
  }:${date.getMinutes()} ${date.getHours() >= 12 ? "PM" : "AM"} - ${
    days[date.getDay()]
  }, ${date.getDate()} ${month[date.getMonth()]} '${date.getYear() - 100}`;
  return (
    <div className="box">
      <div className="temperature">
        <h1>{weatherData.current.temp_c}°</h1>
      </div>
      <div className="city">
        <div>{weatherData.location.name}</div>
        <div className="time-details">{FormattedDate}</div>
      </div>
      <div className="icons">
        <div>
          <img src={weatherData.current.condition.icon} alt="weather-icon" />
        </div>
        <div>{weatherData.current.condition.text}</div>
      </div>
    </div>
  );
}
