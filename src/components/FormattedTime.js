import React from "react";

export default function FormattedTime({ date }) {
  const Time = `${
    date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
  }:${date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes()} ${
    date.getHours() >= 12 ? "PM" : "AM"
  }`;
  return <>{Time}</>;
}
