import React, { useState, useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";

// * api
import { getCoin } from "../services/api";

// *spinner
import Loader from "./Loader";

// *components
import Details from "./Details";

const Main = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      console.log(data);
      setCoins(data);
    };
    fetchAPI();
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <Col xxl="8" xl="8" lg="8" md="7" sm="11" xs="11">
      <Container className="mt-2 bg-white shadow">
        {coins.length ? (
          searchCoins.map((coin) => (
            <Routes>
              <Route to="/details/:id" element={<Details />} />
            </Routes>
          ))
        ) : (
          <Loader />
        )}
      </Container>
    </Col>
  );
};

export default Main;
