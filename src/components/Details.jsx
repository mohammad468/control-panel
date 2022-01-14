import React, { useState, useEffect } from "react";
import axios from "axios";

const Details = () => {
  const [data, setData] = useState({
    name: "",
    id: "",
  });

  const apiDetails = () => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${"ethereum"}`)
      .then((response) => {
        // console.log(response);
        setData({
          name: response.data.name,
          id: response.data.id,
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
