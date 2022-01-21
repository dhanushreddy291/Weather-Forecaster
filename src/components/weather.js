import React from "react";
import "./styles/weather.css";
import { FormattedDate, FormattedTime } from ".";
import {
  MDBTypography,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader,
} from "mdb-react-ui-kit";

export default function weather({ weatherData }) {
  const Color = "#FFBC97";
  const BottomColor = "#F7F7F7";
  return (
    <div>
      <MDBCard
        className="mb-3 text-center text-dark"
        style={{
          minWidth: "min(600px, 90vw)",
          backgroundColor: "#FAEEE0",
        }}
        border="dark"
      >
        <MDBCardHeader
          style={{
            backgroundColor: Color,
          }}
        >
          <MDBTypography
            className="city"
            style={{
              backgroundColor: Color,
            }}
          >
            {weatherData.location.name}
          </MDBTypography>
          <div
            className="temperature"
            style={{
              backgroundColor: Color,
            }}
          >
            {weatherData.current.temp_c}°
          </div>
          <MDBTypography
            style={{
              backgroundColor: Color,
              fontSize: "min(max(1.4vw, 15px), 30px)",
            }}
          >
            <FormattedDate
              date={new Date(weatherData.location.localtime.replace(/-/g, "/"))}
            />
          </MDBTypography>
        </MDBCardHeader>
        <MDBCardBody
          style={{
            backgroundColor: BottomColor,
          }}
        >
          <MDBCardTitle
            style={{
              backgroundColor: BottomColor,
            }}
          >
            {weatherData.current.condition.text}
          </MDBCardTitle>
          <MDBCardText
            style={{
              backgroundColor: BottomColor,
            }}
          >
            <FormattedTime
              date={new Date(weatherData.location.localtime.replace(/-/g, "/"))}
            />
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}
