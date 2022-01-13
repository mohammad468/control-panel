import React, { useState, useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
// import { FaBeer } from "react-icons/fa";
import "./Company.scss";

// * api
import { getCoin } from "../services/api";

// *spinner
import Loader from "./Loader";

const Company = () => {
  const [changeClass, setChangeClass] = useState(false);
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

  const myHandler = () => {
    setChangeClass(true);
    console.log("trued");
  };

  return (
    <>
      {coins.length ? (
        searchCoins.map((coin) => (
          <Row
            className={
              changeClass
                ? "p-2 border-top d-flex align-items-center company-list-single-active"
                : "p-2 border-top d-flex align-items-center company-list-single"
            }
            onClick={myHandler}
            key={coin.id}
          >
            <Col xxl="2" xl="2" lg="2" md="2" sm="2" xs="2">
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
      {/* <FaBeer />
        <span className="me-2">شرکتها</span> */}
    </>
  );
};
export default Company;
