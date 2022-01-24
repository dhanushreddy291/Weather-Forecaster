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

export default function weather({ weatherData, TopColor, BottomColor }) {
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
            backgroundColor: TopColor,
          }}
        >
          <MDBTypography
            className="city"
            style={{
              backgroundColor: TopColor,
            }}
          >
            {weatherData.location.name}
          </MDBTypography>
          <div
            className="temperature"
            style={{
              backgroundColor: TopColor,
            }}
          >
            {weatherData.current.temp_c}°
          </div>
          <MDBTypography
            style={{
              backgroundColor: TopColor,
              fontSize: "min(max(1.4vw, 21px), 30px)",
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
