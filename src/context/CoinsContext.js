import React, { createContext, useContext, useState, useEffect } from "react";
import { getCoin } from "../services/api";

const CoinsContext = createContext({});

export const CoinsContextProvider = ({ children }) => {
  const [selectedCoin, setSelectedCoin] = useState("");
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      setCoins(data);
    };
    fetchAPI();
  }, []);

  return (
    <CoinsContext.Provider value={{ selectedCoin, setSelectedCoin, coins }}>
      {children}
    </CoinsContext.Provider>
  );
};

export const useCoins = () => useContext(CoinsContext);