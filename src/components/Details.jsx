import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

import { useCoins } from "../context/CoinsContext";

const Details = () => {
  const { selectedCoin, coins, setSelectedCoin } = useCoins();

  // const [myData, setMyData] = useState([{
  //   name: "",
  //   id: "",
  // }]);

  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${
          selectedCoin ? selectedCoin : "bitcoin"
        }`
      )
      .then((response) => {
        setMyData(response.data);
      });
  }, [selectedCoin]);

  return (
    <div>
      <h1 className="text-uppercase text-center">{myData.name}</h1>
      <Row>
        <Col className="border border-primary p-2 my-2 mx-2 rounded">
          <h1 className="text-center">{myData.name}</h1>
        </Col>
        <Col className="border border-primary p-2 my-2 mx-2 rounded">
          <h1 className="text-center">{myData.name}</h1>
        </Col>
      </Row>
    </div>
  );
};

export default Details;
