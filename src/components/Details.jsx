import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Badge } from "react-bootstrap";

// *style
import "./Details.scss";

import { useCoins } from "../context/CoinsContext";

const Details = () => {
  const { selectedCoin, coins, setSelectedCoin } = useCoins();

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
      <h1 className="text-uppercase text-center mt-2 text-danger">
        {myData.name}
      </h1>
      <Row>
        <Col className="border border-primary p-2 my-2 mx-2 rounded">
          {/* <h1 className="text-center text-info">{myData.name}</h1> */}
          <p className="text-start px-3 text-lowercase">
            {/* {myData.description.en} */}
          </p>
          <a
            href='#'
            // href={myData.links.homepage}
            target="_blank"
            className="d-flex justify-content-center"
          >
            <h3>
              <Badge className="text-center">website</Badge>
            </h3>
          </a>
        </Col>
        <Col className="border border-primary p-2 my-2 mx-2 rounded">
          <h1 className="text-center text-info">{myData.name}</h1>
          <p className="text-start">{/* {myData.description.en} */}</p>
          <a
            // href={myData.links.homepage}
            target="_blank"
            className="d-flex justify-content-center"
          >
            <h3>
              <Badge className="text-center">website</Badge>
            </h3>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default Details;
