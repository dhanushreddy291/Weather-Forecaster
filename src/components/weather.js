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
  return (
    <div className="box">
      <MDBCard
        className="mb-3 text-center"
        background="white"
        style={{ maxWidth: "18rem" }}
      >
        <MDBCardHeader>
          <MDBTypography variant="h2" className="city">
            {weatherData.location.name}
          </MDBTypography>
          <div className="temperature">{weatherData.current.temp_c}°</div>
          <FormattedDate date={new Date(weatherData.location.localtime)} />
        </MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>{weatherData.current.condition.text}</MDBCardTitle>
          <MDBCardText>
            <FormattedTime date={new Date(weatherData.location.localtime)} />
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}
