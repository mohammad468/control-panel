import React from "react";
import { Container } from "react-bootstrap";

//*components
import Companys from "./Companys";

// * styles
import "./offcanvas.scss";
import "./Company.scss";

const Myoffcanvas = () => {
  return (
    <React.Fragment
      className="bg-white shadow shadow-3"
      xxl="3"
      xl="3"
      lg="3"
      md="4"
      sm="12"
      xs="12"
    >
      <Container
        className="bg-white mt-2"
        style={{
          maxHeight: "calc(100vh - 70px)",
          overflowY: "auto",
        }}
      >
        <Companys />
      </Container>
    </React.Fragment>
  );
};

export default Myoffcanvas;
