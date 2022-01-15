import React from "react";
import { MDBContainer, MDBNavbar } from "mdb-react-ui-kit";

export default function navbar({ setCity, search, city }) {
  return (
    <MDBNavbar dark>
      <MDBContainer fluid>
        <form className="d-flex input-group w-50 mx-auto pt-1">
          <input
            type="search"
            className="form-control text-center"
            placeholder="Enter a City  👀"
            aria-label="Search"
            onChange={(e) => {
              setCity(e.target.value);
            }}
            onKeyPress={search}
          />
        </form>
      </MDBContainer>
    </MDBNavbar>
  );
}
