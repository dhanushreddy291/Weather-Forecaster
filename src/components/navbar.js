import React from "react";
import { MDBContainer, MDBNavbar } from "mdb-react-ui-kit";

export default function navbar() {
  return (
    <MDBNavbar dark>
      <MDBContainer fluid>
        <form className="d-flex input-group w-50 mx-auto pt-1">
          <input
            type="search"
            className="form-control text-center link-success"
            placeholder="Enter a City  👀"
            aria-label="Search"
          />
        </form>
      </MDBContainer>
    </MDBNavbar>
  );
}
