import React, { useState, useEffect } from "react";
import { Col, Container } from "react-bootstrap";

// * api
import { getCoin } from "../services/api";

// *spinner
import Loader from "./Loader";

// *components
import Details from "./Details";

const Main = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      setCoins(data);
    };
    fetchAPI();
  }, []);

  return (
    <Col xxl="9" xl="9" lg="9" md="7" sm="12" xs="12">
      <Container
        className="mt-2 bg-white shadow"
        style={{
          maxHeight: "calc(100vh - 70px)",
          overflowY: "auto",
        }}
      >
        {coins.length ? <Details key={coins.id} /> : <Loader />}
      </Container>
    </Col>
  );
};

export default Main;
