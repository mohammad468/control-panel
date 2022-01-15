import React, { useState, useEffect } from "react";
import axios from "axios";

import { useCoins } from "../context/CoinsContext";

const Details = () => {
  const { selectedCoin, coins, setSelectedCoin } = useCoins();

  // const [myData, setMyData] = useState([{
  //   name: "",
  //   id: "",
  // }]);

  const [myData, setMyData] = useState([]);

  // useEffect(() => {
  //   const apiDetails = async () => {
  //     await axios
  //       .get(
  //         `https://api.coingecko.com/api/v3/coins/${
  //           selectedCoin ? selectedCoin : "bitcoin"
  //         }`
  //       )
  //       .then((r) => {
  //         console.log(r);
  //         setData({
  //           name: r.data.name,
  //           id: r.data.id,
  //         });
  //         return setData;
  //       });
  //   };
  //   ( () => {
  //     const response = apiDetails();
  //     setData({
  //       name: response.data.name,
  //       id: response.data.id,
  //     });
  //   })();
  //   console.log(
  //     `https://api.coingecko.com/api/v3/coins/${
  //       selectedCoin ? selectedCoin : "bitcoin"
  //     }`
  //   );
  // }, []);

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
      <p>{selectedCoin}</p>
      {console.log(selectedCoin)}
      {console.log(myData)}
      <h1>{myData.id}</h1>
    </div>
  );
};

export default Details;
