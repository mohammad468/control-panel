import React, { useState, useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import "./Company.scss";

// * api
import { getCoin } from "../services/api";

// *spinner
import Loader from "./Loader";

const Company = () => {
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      setCoins(data);
    };
    fetchAPI();
  }, []);

  const coinId = () => {
    console.log(selectedCoin);
  };

  coinId();

  return (
    <>
      {coins.length > 0 ? (
        coins.map((coin) => (
          <Row
            className={
              selectedCoin === coin.id
                ? "p-2 pe-3 border-top d-flex align-items-center company-list-single-active"
                : "p-2 border-top d-flex align-items-center company-list-single"
            }
            onClick={() => {
              setSelectedCoin(coin.id);
              // console.log(coin.id);
              // console.log(coin.name);
            }}
            key={coin.id}
          >
            <Col xxl="2" xl="2" lg="3" md="3" sm="2" xs="2">
              <Image
                src={coin.image}
                alt={coin.name}
                className="coin-image mx-2"
                fluid
              />
            </Col>
            <Col>
              <span>{coin.name}</span>
            </Col>
          </Row>
        ))
      ) : (
        <Loader />
      )}
    </>
  );
};
export default Company;
