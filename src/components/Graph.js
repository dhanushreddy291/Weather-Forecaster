import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function graph({ Data }) {
  const NewData = [];
  for (var i = 0; i < Data.forecast.forecastday[0].hour.length; i++) {
    NewData.push(Data.forecast.forecastday[0].hour[i].feelslike_c);
  }
  const data = {
    labels: [
      "12AM",
      "1AM",
      "2AM",
      "3AM",
      "4AM",
      "5AM",
      "6AM",
      "7AM",
      "8AM",
      "9AM",
      "10AM",
      "11AM",
      "12PM",
      "1PM",
      "2PM",
      "3PM",
      "4PM",
      "5PM",
      "6PM",
      "7PM",
      "8PM",
      "9PM",
      "10PM",
      "11PM",
    ],
    datasets: [
      {
        data: NewData,
        label: `Weather Forecast for ${Data.location.name} Today`,
        fill: true,
        backgroundColor: "rgba(81, 107, 235, 0.61)",
        borderColor: "rgb(0, 0, 0, 1)",
      },
    ],
  };
  return (
    <div
      style={{
        width: "min(92vw, 650px)",
        marginTop: "25px",
      }}
    >
      <Line
        data={data}
        options={{
          responsive: true,
          maintainAspectRation: true,
          scales: {
            x: {
              grid: {
                color: "rgba(135, 100, 69, 0.1)",
                borderColor: "#000",
              },
            },
            y: {
              grid: {
                color: "rgba(135, 100, 69, 0.1)",
                borderColor: "#000",
              },
              ticks: {
                callback: function (value) {
                  return value + "°C";
                },
              },
            },
          },
          plugins: {
            legend: {
              labels: {
                font: {
                  weight: "bolder",
                  size: 20,
                  family: "Comfortaa",
                  lineHeight: 1.4,
                },
              },
            },
          },
          animations: {
            tension: {
              duration: 500,
              easing: "easeInOutElastic",
              from: 1,
              to: 0,
              loop: false,
            },
          },
        }}
        height={"150vh"}
      />
    </div>
  );
}
