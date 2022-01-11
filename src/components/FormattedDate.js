import React from "react";

export default function FormattedDate({ date }) {
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
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  var Date = `${days[date.getDay()]}, ${date.getDate()} ${
    month[date.getMonth()]
  }`;
  return <>{Date}</>;
}
