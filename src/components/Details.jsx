import React from "react";
import axios from "axios";

const Details = () => {
  const BASE_URL = "https://api.coingecko.com/api/v3/coins";
  const getDetailsCoin = async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
  };

  return (
    <div>
      <h1>is details of Bitcoin</h1>
    </div>
  );
};

export default Details;
