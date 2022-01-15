import React, { useState, useEffect } from "react";
import axios from "axios";

import { useCoins } from "../context/CoinsContext";

const Details = () => {
  const { selectedCoin, coins, setSelectedCoin } = useCoins();

  const [data, setData] = useState({
    name: "",
    id: "",
  });

  const apiDetails = async () => {
    await axios
      .get(`https://api.coingecko.com/api/v3/coins/${"ethereum"}`)
      .then((r) => {
        // console.log(response);
        setData({
          name: r.data.name,
          id: r.data.id,
        });
        return setData;
      });
  };

  useEffect(() => {
    (async () => {
      const response = await apiDetails();
      setData({
        name: response.data.name,
        id: response.data.id,
      });
    })();
  }, []);

  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data.id}</h1>
    </div>
  );
};

export default Details;
