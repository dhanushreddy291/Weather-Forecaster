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
    NewData.push(Data.forecast.forecastday[0].hour[i].temp_c);
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
        label: `Forecast for ${Data.location.name}`,
        fill: true,
        backgroundColor: "#6D9886",
        borderColor: "#fff",
      },
    ],
  };
  return (
    <div>
      <Line
        data={data}
        options={{ responsive: true, maintainAspectRation: true }}
        width={"440vw"}
        height={"250vh"}
      />
    </div>
  );
}
