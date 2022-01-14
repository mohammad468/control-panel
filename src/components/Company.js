import React, { useState, useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import "./Company.scss";

// * api
import { getCoin } from "../services/api";

// *spinner
import Loader from "./Loader";

const Company = () => {
  const [changeClass, setChangeClass] = useState(false);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      setCoins(data);
    };
    fetchAPI();
  }, []);

  const myHandler = () => {
    setChangeClass(true);
    console.log("trued");
  };

  const myHandler2 = () => {
    console.log();
  };

  return (
    <>
      {coins.length ? (
        coins.map((coin) => (
          <Row
            className={
              changeClass
                ? "p-2 border-top d-flex align-items-center company-list-single-active"
                : "p-2 border-top d-flex align-items-center company-list-single"
            }
            onClick={() => {
              myHandler();
              myHandler2();
            }}
            key={coin.id}
          >
            <Col xxl="3" xl="3" lg="4" md="4" sm="2" xs="2">
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
